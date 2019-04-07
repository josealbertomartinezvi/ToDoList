"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//definir enrutador
const express_1 = require("express");
class IndexRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', (req, res) => res.send('Hi'));
    }
}
const indexRoutes = new IndexRoutes();
exports.default = indexRoutes.router;
