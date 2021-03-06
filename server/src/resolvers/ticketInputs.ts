import { Field, InputType } from "type-graphql";

@InputType()
export class TicketInput {
  @Field()
  title!: string;

  @Field()
  description!: string;

  @Field()
  status!: string;

  @Field()
  priority!: string;
}
