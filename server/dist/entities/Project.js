"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Project = void 0;
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
const Ticket_1 = require("./Ticket");
const User_1 = require("./User");
let Project = class Project extends typeorm_1.BaseEntity {
};
__decorate([
    type_graphql_1.Field(),
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Project.prototype, "id", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], Project.prototype, "title", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], Project.prototype, "description", void 0);
__decorate([
    type_graphql_1.Field(() => [User_1.User]),
    typeorm_1.ManyToMany(() => User_1.User, (user) => user.projects),
    typeorm_1.JoinTable(),
    __metadata("design:type", Array)
], Project.prototype, "users", void 0);
__decorate([
    type_graphql_1.Field(() => [Ticket_1.Ticket]),
    typeorm_1.OneToMany(() => Ticket_1.Ticket, (ticket) => ticket.project),
    __metadata("design:type", Array)
], Project.prototype, "tickets", void 0);
__decorate([
    type_graphql_1.Field(() => String),
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], Project.prototype, "createdAt", void 0);
__decorate([
    type_graphql_1.Field(() => String),
    typeorm_1.UpdateDateColumn(),
    __metadata("design:type", Date)
], Project.prototype, "updatedAt", void 0);
Project = __decorate([
    type_graphql_1.ObjectType(),
    typeorm_1.Entity()
], Project);
exports.Project = Project;
//# sourceMappingURL=Project.js.map