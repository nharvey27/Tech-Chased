import { MyContext } from "src/types";
import {
  Arg,
  Ctx,
  FieldResolver,
  Int,
  Mutation,
  Query,
  Resolver,
  Root,
  UseMiddleware,
} from "type-graphql";
import { Project } from "../entities/Project";
import { ProjectInput } from "./projectInputs";
import { isAuth } from "../middleware/isAuth";
import { createQueryBuilder, getConnection } from "typeorm";
import { Ticket } from "../entities/Ticket";
import { User } from "../entities/User";

@Resolver(Project)
export class ProjectResolver {
  @FieldResolver(() => User)
  async users(@Root() project: Project) {
    const result = await getConnection()
      .createQueryBuilder()
      .relation(Project, "users")
      .of(project.id)
      .loadMany();

    console.log(result);
    return result;
  }

  @FieldResolver(() => Ticket)
  async tickets(@Root() project: Project) {
    let result = await Ticket.find({ where: { projectId: project.id } });
    return result;
  }

  @Query(() => [Project])
  async projects(): Promise<Project[] | undefined> {
    return Project.find({});
  }

  @Query(() => Project || null)
  async project(
    @Arg("id", () => Int) id: number
  ): Promise<Project | undefined> {
    const project = Project.findOne(id);
    if (!project) {
      return undefined;
    }
    return project;
  }

  @UseMiddleware(isAuth)
  @Mutation(() => Project)
  async createProject(
    @Arg("options") options: ProjectInput,
    @Ctx() { req }: MyContext
  ): Promise<Project> {
    // fetch user id from req object
    const userId = req.session.userId;

    //create project and save into db
    console.log(options);
    const project = await Project.create({
      ...options,
    }).save();

    //create join table entry and save to db
    await getConnection()
      .createQueryBuilder()
      .relation(Project, "users")
      .of(project)
      .add(userId);
    //return project created
    console.log(project);
    return project;
  }

  @UseMiddleware(isAuth)
  @Mutation(() => Boolean)
  async deleteProject(
    @Arg("id", () => Int) id: number,
    @Ctx() { req }: MyContext
  ): Promise<Boolean> {
    const userId = req.session.userId;

    const projectResult = await Project.delete({ id });

    await getConnection()
      .createQueryBuilder()
      .relation(Project, "users")
      .of(id)
      .remove(userId);

    //check if project was deleted
    if (!projectResult) {
      return false;
    }
    return true;
  }

  @UseMiddleware(isAuth)
  @Mutation(() => Project)
  async updateProject(
    @Arg("id", () => Int) id: number,
    @Arg("options") options: ProjectInput,
    @Ctx() { req }: MyContext
  ): Promise<Project | null> {
    const userId = req.session.userId;

    const result = await createQueryBuilder()
      .update(Project)
      .set({ ...options })
      .where("id = :id ", { id })
      .returning("*")
      .execute();

    console.log("result:", result.raw[0] || undefined);
    return result.raw;
  }
}
