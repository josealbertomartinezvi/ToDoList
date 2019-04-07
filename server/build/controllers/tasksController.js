"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class TasksController {
    // get task list of the data base
    tasksList(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const toDo = yield database_1.default.query('SELECT * FROM tasks;');
            res.json(toDo);
        });
    }
    // filter the task
    searchTasks(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name } = req.params;
            const search = yield database_1.default.query('SELECT * FROM tasks WHERE description LIKE "%' + name + '%"');
            res.json(search);
        });
    }
    // get task´s status (open, in progress, completed, archived)
    getStatus(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const status = yield database_1.default.query('SELECT * FROM status;');
            res.json(status);
        });
    }
    getOneTask(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const task = yield database_1.default.query('SELECT * FROM tasks WHERE id = ?', [id]);
            if (task.length > 0) {
                return res.json(task[0]);
            }
            else {
                return res.status(404).json({ text: 'game didn´t found' });
            }
        });
    }
    createTask(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO tasks set ?', [req.body]);
            res.json('Task created');
        });
    }
    updateTask(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE tasks set ? WHERE id = ?', [req.body, id]);
            res.json('Task updated');
        });
    }
    deleteTask(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM tasks WHERE id = ?', [id]);
            res.json('task deleted');
        });
    }
}
const tasksController = new TasksController();
exports.default = tasksController;
