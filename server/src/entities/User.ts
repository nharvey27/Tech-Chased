import { Field, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Project } from "./Project";
import { Ticket } from "./Ticket";

@ObjectType()
@Entity()
export class User extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @Column()
  username!: string;

  @Field()
  @Column({ unique: true })
  email!: string;

  @Column()
  password!: string;

  //users may have many projects
  @Field(() => [Project], { nullable: true })
  @ManyToMany(() => Project, (project) => project.users, { eager: true })
  projects: Project[];

  //users may have multiple tickets
  @Field(() => [Ticket], { nullable: true })
  @ManyToMany(() => Ticket, (ticket) => ticket.users, { eager: true })
  @JoinTable()
  tickets: Ticket[];

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt: Date;
}
