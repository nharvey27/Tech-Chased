import { Field, InputType } from "type-graphql";

@InputType()
export class CommentInput {
  @Field()
  text!: string;
}
