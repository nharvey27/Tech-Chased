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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectResolver = void 0;
const type_graphql_1 = require("type-graphql");
const Project_1 = require("../entities/Project");
const projectInputs_1 = require("./projectInputs");
const isAuth_1 = require("../middleware/isAuth");
const typeorm_1 = require("typeorm");
const Ticket_1 = require("../entities/Ticket");
const User_1 = require("../entities/User");
let ProjectResolver = class ProjectResolver {
    users(project) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield typeorm_1.getConnection()
                .createQueryBuilder()
                .relation(Project_1.Project, "users")
                .of(project.id)
                .loadMany();
            console.log(result);
            return result;
        });
    }
    tickets(project) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield Ticket_1.Ticket.find({ where: { projectId: project.id } });
            return result;
        });
    }
    projects() {
        return __awaiter(this, void 0, void 0, function* () {
            return Project_1.Project.find({});
        });
    }
    project(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const project = Project_1.Project.findOne(id);
            if (!project) {
                return undefined;
            }
            return project;
        });
    }
    createProject(options, { req }) {
        return __awaiter(this, void 0, void 0, function* () {
            const userId = req.session.userId;
            console.log(options);
            const project = yield Project_1.Project.create(Object.assign({}, options)).save();
            yield typeorm_1.getConnection()
                .createQueryBuilder()
                .relation(Project_1.Project, "users")
                .of(project)
                .add(userId);
            console.log(project);
            return project;
        });
    }
    deleteProject(id, { req }) {
        return __awaiter(this, void 0, void 0, function* () {
            const userId = req.session.userId;
            const projectResult = yield Project_1.Project.delete({ id });
            yield typeorm_1.getConnection()
                .createQueryBuilder()
                .relation(Project_1.Project, "users")
                .of(id)
                .remove(userId);
            if (!projectResult) {
                return false;
            }
            return true;
        });
    }
    updateProject(id, options, { req }) {
        return __awaiter(this, void 0, void 0, function* () {
            const userId = req.session.userId;
            const result = yield typeorm_1.createQueryBuilder()
                .update(Project_1.Project)
                .set(Object.assign({}, options))
                .where("id = :id ", { id })
                .returning("*")
                .execute();
            console.log("result:", result.raw[0] || undefined);
            return result.raw;
        });
    }
};
__decorate([
    type_graphql_1.FieldResolver(() => User_1.User),
    __param(0, type_graphql_1.Root()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Project_1.Project]),
    __metadata("design:returntype", Promise)
], ProjectResolver.prototype, "users", null);
__decorate([
    type_graphql_1.FieldResolver(() => Ticket_1.Ticket),
    __param(0, type_graphql_1.Root()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Project_1.Project]),
    __metadata("design:returntype", Promise)
], ProjectResolver.prototype, "tickets", null);
__decorate([
    type_graphql_1.Query(() => [Project_1.Project]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProjectResolver.prototype, "projects", null);
__decorate([
    type_graphql_1.Query(() => Project_1.Project || null),
    __param(0, type_graphql_1.Arg("id", () => type_graphql_1.Int)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProjectResolver.prototype, "project", null);
__decorate([
    type_graphql_1.UseMiddleware(isAuth_1.isAuth),
    type_graphql_1.Mutation(() => Project_1.Project),
    __param(0, type_graphql_1.Arg("options")),
    __param(1, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [projectInputs_1.ProjectInput, Object]),
    __metadata("design:returntype", Promise)
], ProjectResolver.prototype, "createProject", null);
__decorate([
    type_graphql_1.UseMiddleware(isAuth_1.isAuth),
    type_graphql_1.Mutation(() => Boolean),
    __param(0, type_graphql_1.Arg("id", () => type_graphql_1.Int)),
    __param(1, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], ProjectResolver.prototype, "deleteProject", null);
__decorate([
    type_graphql_1.UseMiddleware(isAuth_1.isAuth),
    type_graphql_1.Mutation(() => Project_1.Project),
    __param(0, type_graphql_1.Arg("id", () => type_graphql_1.Int)),
    __param(1, type_graphql_1.Arg("options")),
    __param(2, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, projectInputs_1.ProjectInput, Object]),
    __metadata("design:returntype", Promise)
], ProjectResolver.prototype, "updateProject", null);
ProjectResolver = __decorate([
    type_graphql_1.Resolver(Project_1.Project)
], ProjectResolver);
exports.ProjectResolver = ProjectResolver;
//# sourceMappingURL=project.js.map