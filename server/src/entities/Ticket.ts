import { Field, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Project } from "./Project";
import { User } from "./User";

@ObjectType()
@Entity()
export class Ticket extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @Column()
  title!: string;

  @Field()
  @Column()
  description!: string;

  @Field()
  @Column()
  status!: string;

  @Field()
  @Column()
  priority!: string;

  //column so a ticket knows what project it belongs to
  @Field()
  @Column()
  projectId!: number;

  //tickets belong to a single project
  @Field(() => Project)
  @ManyToOne(() => Project, (project) => project.tickets)
  project: Project;

  //ticket may have multiple users
  @Field(() => [User])
  @ManyToMany(() => User, (user) => user.tickets)
  users: User[];

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt: Date;
}
