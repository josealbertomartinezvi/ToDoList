"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//definir enrutador
const express_1 = require("express");
const peopleController_1 = __importDefault(require("../controllers/peopleController"));
class PeopleRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', peopleController_1.default.getPeople);
        this.router.get('/:id', peopleController_1.default.getOne);
        this.router.post('/', peopleController_1.default.create);
        this.router.put('/:id', peopleController_1.default.update);
        this.router.delete('/:id', peopleController_1.default.delete);
    }
}
const peopleRoutes = new PeopleRoutes();
exports.default = peopleRoutes.router;
