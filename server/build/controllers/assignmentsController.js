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
class AssignmentsController {
    getAssignments(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const people = yield database_1.default.query('SELECT description, people.id as peopleId, name, last_name FROM tasks, people, tasks_has_people where tasks.id=? && tasks_has_people.tasks_id=? && people.id=tasks_has_people.people_id', [id, id]);
            if (people.length > 0) {
                return res.json(people);
            }
            else {
                return res.status(404).json({ text: 'info didn´t found' });
            }
        });
    }
    getDidntAssignPeople(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const people = yield database_1.default.query('SELECT * FROM people WHERE people.id NOT IN (SELECT people.id FROM people, tasks_has_people where tasks_has_people.tasks_id = ? and people.id=tasks_has_people.people_id);', [req.params.id]);
            res.json(people);
        });
    }
    createAssignment(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO tasks_has_people set ?', [req.body]);
            res.json('Assignment created');
        });
    }
    deleteAssignment(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('DELETE FROM tasks_has_people WHERE tasks_id = ? && people_id = ?', [req.params.taskId, req.params.personId]);
            res.json('Assignment deleted');
        });
    }
}
const assignmentsController = new AssignmentsController();
exports.default = assignmentsController;
