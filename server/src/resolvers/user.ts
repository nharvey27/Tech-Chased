import { User } from "../entities/User";
import { Query, Resolver } from "type-graphql";

@Resolver(User)
export class UserResolver {
  @Query(() => String)
  async test() {
    return "test";
  }
}