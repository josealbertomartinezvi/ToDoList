"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//definir enrutador
const express_1 = require("express");
const indexController_1 = __importDefault(require("../controllers/indexController"));
class IndexRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    //first route of the proyect
    config() {
        this.router.get('/', indexController_1.default.index);
    }
}
const indexRoutes = new IndexRoutes();
exports.default = indexRoutes.router;
