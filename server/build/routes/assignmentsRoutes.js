"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//definir enrutador
const express_1 = require("express");
const assignmentsController_1 = __importDefault(require("../controllers/assignmentsController"));
class AssignmentsRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    //routes to assign tasks
    config() {
        this.router.get('/anyOne/:id', assignmentsController_1.default.getDidntAssignPeople);
        this.router.get('/:id', assignmentsController_1.default.getAssignments);
        this.router.post('/', assignmentsController_1.default.createAssignment);
        this.router.delete('/:taskId/:personId', assignmentsController_1.default.deleteAssignment);
    }
}
const assignmentsRoutes = new AssignmentsRoutes();
exports.default = assignmentsRoutes.router;
