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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TicketResolver = void 0;
const Ticket_1 = require("../entities/Ticket");
const types_1 = require("src/types");
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
const ticketInputs_1 = require("./ticketInputs");
const Project_1 = require("../entities/Project");
const User_1 = require("../entities/User");
let TicketResolver = class TicketResolver extends typeorm_1.BaseEntity {
    users(ticket) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield typeorm_1.getConnection()
                .createQueryBuilder()
                .relation(Ticket_1.Ticket, "users")
                .of(ticket.id)
                .loadMany();
            console.log(result);
            return result;
        });
    }
    project(ticket) {
        return Project_1.Project.findOne(ticket.projectId);
    }
    ticket(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const ticket = yield Ticket_1.Ticket.findOne(id);
            if (!ticket) {
                return undefined;
            }
            return ticket;
        });
    }
    tickets() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Ticket_1.Ticket.find();
        });
    }
    createTicket(options, projectId, { req }) {
        return __awaiter(this, void 0, void 0, function* () {
            const userId = req.session.userId;
            const ticket = yield Ticket_1.Ticket.create(Object.assign(Object.assign({}, options), { projectId })).save();
            yield typeorm_1.getConnection()
                .createQueryBuilder()
                .relation(Ticket_1.Ticket, "users")
                .of(ticket)
                .add(userId);
            return ticket;
        });
    }
    deleteTicket(id, { req }) {
        return __awaiter(this, void 0, void 0, function* () {
            const userId = req.session.userId;
            const ticketResult = yield Ticket_1.Ticket.delete({ id });
            yield typeorm_1.getConnection()
                .createQueryBuilder()
                .relation(Ticket_1.Ticket, "users")
                .of(id)
                .remove(userId);
            if (ticketResult.affected === 0) {
                return false;
            }
            return true;
        });
    }
    updateTicket(id, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield typeorm_1.createQueryBuilder()
                .update(Ticket_1.Ticket)
                .set(Object.assign({}, options))
                .where("id = :id ", { id })
                .returning("*")
                .execute();
            return result.raw[0];
        });
    }
};
__decorate([
    type_graphql_1.FieldResolver(() => User_1.User),
    __param(0, type_graphql_1.Root()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Ticket_1.Ticket]),
    __metadata("design:returntype", Promise)
], TicketResolver.prototype, "users", null);
__decorate([
    type_graphql_1.FieldResolver(() => Project_1.Project),
    __param(0, type_graphql_1.Root()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Ticket_1.Ticket]),
    __metadata("design:returntype", void 0)
], TicketResolver.prototype, "project", null);
__decorate([
    type_graphql_1.Query(() => Ticket_1.Ticket),
    __param(0, type_graphql_1.Arg("id", () => type_graphql_1.Int)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TicketResolver.prototype, "ticket", null);
__decorate([
    type_graphql_1.Query(() => [Ticket_1.Ticket]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TicketResolver.prototype, "tickets", null);
__decorate([
    type_graphql_1.Mutation(() => Ticket_1.Ticket, { nullable: true }),
    __param(0, type_graphql_1.Arg("options")),
    __param(1, type_graphql_1.Arg("projectId", () => type_graphql_1.Int)),
    __param(2, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof ticketInputs_1.TicketInput !== "undefined" && ticketInputs_1.TicketInput) === "function" ? _a : Object, Number, typeof (_b = typeof types_1.MyContext !== "undefined" && types_1.MyContext) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], TicketResolver.prototype, "createTicket", null);
__decorate([
    type_graphql_1.Mutation(() => Boolean),
    __param(0, type_graphql_1.Arg("id", () => type_graphql_1.Int)),
    __param(1, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, typeof (_c = typeof types_1.MyContext !== "undefined" && types_1.MyContext) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], TicketResolver.prototype, "deleteTicket", null);
__decorate([
    type_graphql_1.Mutation(() => Ticket_1.Ticket),
    __param(0, type_graphql_1.Arg("id", () => type_graphql_1.Int)),
    __param(1, type_graphql_1.Arg("options")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, typeof (_d = typeof ticketInputs_1.TicketInput !== "undefined" && ticketInputs_1.TicketInput) === "function" ? _d : Object]),
    __metadata("design:returntype", Promise)
], TicketResolver.prototype, "updateTicket", null);
TicketResolver = __decorate([
    type_graphql_1.ObjectType(),
    typeorm_1.Entity(),
    type_graphql_1.Resolver(Ticket_1.Ticket)
], TicketResolver);
exports.TicketResolver = TicketResolver;
//# sourceMappingURL=ticket.js.map