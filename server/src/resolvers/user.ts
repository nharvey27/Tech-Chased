import { User } from "../entities/User";
import {
  Arg,
  Ctx,
  Field,
  Mutation,
  ObjectType,
  Query,
  Resolver,
} from "type-graphql";
import { UsernamePasswordInput } from "./usernamePasswordInput";
import { MyContext } from "../types";
import { validateRegister } from "../utils/validateRegister";
import { getConnection } from "typeorm";
import argon2 from "argon2";

@ObjectType()
class FieldError {
  @Field()
  field: string;
  @Field()
  message: string;
}

@ObjectType()
class UserResponse {
  @Field(() => [FieldError], { nullable: true })
  errors?: FieldError[];

  @Field(() => User, { nullable: true })
  user?: User;
}

@Resolver(User)
export class UserResolver {
  @Query(() => User, { nullable: true })
  async me(@Ctx() { req }: MyContext) {
    //check if theres a cookie in the brower
    if (!req.session.userId) {
      return null;
    }
    //find user using the cookie
    return User.findOne(req.session.userId);
  }

  @Mutation(() => UserResponse)
  async register(
    @Arg("options") options: UsernamePasswordInput,
    @Ctx() { req }: MyContext
  ): Promise<UserResponse> {
    //check for validation errors
    const errors = validateRegister(options);
    if (errors) {
      return { errors };
    }

    let user;
    //hash pasword using argon
    const hashedPassword = await argon2.hash(options.password);
    try {
      //insert user into db with querybuilder
      const result = await getConnection()
        .createQueryBuilder()
        .insert()
        .into(User)
        .values({
          username: options.username,
          email: options.email,
          password: hashedPassword,
        })
        .returning("*")
        .execute();
      user = result.raw[0];
    } catch (error) {
      if (error.code === "23505") {
        return {
          errors: [
            {
              field: "username",
              message: "username already taken",
            },
          ],
        };
      }
    }
    //set user cookie
    req.session.userId = user.id;

    //return user
    return { user };
  }

  @Mutation(() => UserResponse)
  async login(
    @Arg("username") username: string,
    @Arg("password") password: string,
    @Ctx() { req }: MyContext
  ): Promise<UserResponse> {
    //find user with username
    const user = await User.findOne({ where: { username } });

    //check if not user is found and display errors
    if (!user) {
      return {
        errors: [
          {
            field: "usernameOrEmail",
            message: "that username doesn't exist",
          },
        ],
      };
    }

    //check if the provided password is the same as the hashed password in db
    const valid = await argon2.verify(user.password, password);

    if (!valid) {
      return {
        errors: [
          {
            field: "usernameOrEmail",
            message: "incorrect password",
          },
        ],
      };
    }

    //set user cookie
    req.session.userId = user.id;

    //return user
    return {
      user,
    };
  }
  @Mutation(() => Boolean)
  logout(@Ctx() { req, res }: MyContext) {
    return new Promise((resolve) =>
      req.session.destroy((err) => {
        //clear cookie in redis
        res.clearCookie("qid");

        //check for errors
        if (err) {
          console.log(err);
          resolve(false);
          return;
        }

        //resolve if true
        resolve(true);
      })
    );
  }
}
