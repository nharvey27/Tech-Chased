import { Ticket } from "../entities/Ticket";
import { MyContext } from "src/types";
import {
  Arg,
  Ctx,
  FieldResolver,
  Int,
  Mutation,
  ObjectType,
  Query,
  Resolver,
  Root,
} from "type-graphql";
import { BaseEntity, Entity, getConnection, createQueryBuilder } from "typeorm";
import { TicketInput } from "./ticketInputs";
import { Project } from "../entities/Project";
import { User } from "../entities/User";

@ObjectType()
@Entity()
@Resolver(Ticket)
export class TicketResolver extends BaseEntity {
  @FieldResolver(() => User)
  async users(@Root() ticket: Ticket) {
    const result = await getConnection()
      .createQueryBuilder()
      .relation(Ticket, "users")
      .of(ticket.id)
      .loadMany();

    console.log(result);
    return result;
  }

  @FieldResolver(() => Project)
  project(@Root() ticket: Ticket) {
    return Project.findOne(ticket.projectId);
  }

  @Query(() => Ticket)
  async ticket(@Arg("id", () => Int!) id: number): Promise<Ticket | undefined> {
    const ticket = await Ticket.findOne(id);

    if (!ticket) {
      return undefined;
    }
    return ticket;
  }

  @Query(() => [Ticket])
  async tickets(): Promise<Ticket[]> {
    return await Ticket.find();
  }

  @Mutation(() => Ticket, { nullable: true })
  async createTicket(
    @Arg("options") options: TicketInput,
    @Arg("projectId", () => Int) projectId: number,
    @Ctx() { req }: MyContext
  ): Promise<Ticket> {
    // capture user id from browser session
    const userId = req.session.userId;

    //add ticket into db
    const ticket = await Ticket.create({
      ...options,
      projectId,
    }).save();

    //create join table entry and save to db
    await getConnection()
      .createQueryBuilder()
      .relation(Ticket, "users")
      .of(ticket)
      .add(userId);

    //return newly created ticket
    return ticket;
  }

  @Mutation(() => Boolean)
  async deleteTicket(
    @Arg("id", () => Int) id: number,
    @Ctx() { req }: MyContext
  ): Promise<Boolean> {
    const userId = req.session.userId;

    const ticketResult = await Ticket.delete({ id });

    await getConnection()
      .createQueryBuilder()
      .relation(Ticket, "users")
      .of(id)
      .remove(userId);

    //check if project was deleted
    if (ticketResult.affected === 0) {
      return false;
    }
    return true;
  }

  @Mutation(() => Ticket)
  async updateTicket(
    @Arg("id", () => Int) id: number,
    @Arg("options") options: TicketInput
  ): Promise<Ticket | null> {
    const result = await createQueryBuilder()
      .update(Ticket)
      .set({ ...options })
      .where("id = :id ", { id })
      .returning("*")
      .execute();

    return result.raw[0];
  }
}
