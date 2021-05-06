import { Field, InputType } from "type-graphql";

@InputType()
export class ProjectInput {
  @Field()
  title!: string;

  @Field()
  description!: string;
}
