"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//definir enrutador
const express_1 = require("express");
const tasksController_1 = __importDefault(require("../controllers/tasksController"));
class TasksRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    //routes to get tasks
    config() {
        this.router.get('/', tasksController_1.default.tasksList);
        this.router.get('/status', tasksController_1.default.getStatus);
        this.router.get('/search/:name', tasksController_1.default.searchTasks);
        this.router.get('/:id', tasksController_1.default.getOneTask);
        this.router.post('/', tasksController_1.default.createTask);
        this.router.put('/:id', tasksController_1.default.updateTask);
        this.router.delete('/:id', tasksController_1.default.deleteTask);
    }
}
const tasksRoutes = new TasksRoutes();
exports.default = tasksRoutes.router;
