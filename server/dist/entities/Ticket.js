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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ticket = void 0;
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
const Project_1 = require("./Project");
const User_1 = require("./User");
let Ticket = class Ticket extends typeorm_1.BaseEntity {
};
__decorate([
    type_graphql_1.Field(),
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Ticket.prototype, "id", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], Ticket.prototype, "title", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], Ticket.prototype, "description", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], Ticket.prototype, "status", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], Ticket.prototype, "priority", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Ticket.prototype, "projectId", void 0);
__decorate([
    type_graphql_1.Field(() => Project_1.Project),
    typeorm_1.ManyToOne(() => Project_1.Project, (project) => project.tickets),
    __metadata("design:type", typeof (_a = typeof Project_1.Project !== "undefined" && Project_1.Project) === "function" ? _a : Object)
], Ticket.prototype, "project", void 0);
__decorate([
    type_graphql_1.Field(() => [User_1.User]),
    typeorm_1.ManyToMany(() => User_1.User, (user) => user.tickets),
    __metadata("design:type", Array)
], Ticket.prototype, "users", void 0);
__decorate([
    type_graphql_1.Field(() => String),
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], Ticket.prototype, "createdAt", void 0);
__decorate([
    type_graphql_1.Field(() => String),
    typeorm_1.UpdateDateColumn(),
    __metadata("design:type", Date)
], Ticket.prototype, "updatedAt", void 0);
Ticket = __decorate([
    type_graphql_1.ObjectType(),
    typeorm_1.Entity()
], Ticket);
exports.Ticket = Ticket;
//# sourceMappingURL=Ticket.js.map