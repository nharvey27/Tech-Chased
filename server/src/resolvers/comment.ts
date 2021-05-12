import {
  Arg,
  Ctx,
  FieldResolver,
  Int,
  Mutation,
  Resolver,
  Root,
} from "type-graphql";
import { Comment } from "src/entities/Comment";
import { ObjectType } from "type-graphql";
import { Entity, BaseEntity } from "typeorm";
import { CommentInput } from "./commentInputs";
import { MyContext } from "src/types";
import { User } from "../entities/User";

@ObjectType()
@Entity()
@Resolver(Comment)
export class CommentResolver extends BaseEntity {
  @FieldResolver(() => User)
  async user(@Root() comment: Comment) {
    const user = await User.findOne(comment.userId);

    return user;
  }
  @Mutation(() => Comment)
  async createComment(
    @Arg("options") options: CommentInput,
    @Arg("ticketId", () => Int) ticketId: number,
    @Ctx() { req }: MyContext
  ): Promise<Comment> {
    const userId = req.session.userId;

    const comment = await Comment.create({
      ...options,
      userId,
      ticketId,
    }).save();

    return comment;
  }
}
