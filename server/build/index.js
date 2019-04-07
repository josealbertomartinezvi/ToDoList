"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
//import the routes 
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const peopleRoutes_1 = __importDefault(require("./routes/peopleRoutes"));
const tasksRoutes_1 = __importDefault(require("./routes/tasksRoutes"));
const assignmentsRoutes_1 = __importDefault(require("./routes/assignmentsRoutes"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    //configuration of the app 
    config() {
        this.app.set('port', process.env.PORT || 3000); //Configuration of the listening port
        this.app.use(morgan_1.default('dev'));
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json()); //this lets accept json format from client apps
    }
    //configuration of server´s routes
    routes() {
        this.app.use('/', indexRoutes_1.default);
        this.app.use('/api/people/', peopleRoutes_1.default);
        this.app.use('/api/tasks/', tasksRoutes_1.default);
        this.app.use('/api/tasks/search/', tasksRoutes_1.default);
        this.app.use('/api/assignments/', assignmentsRoutes_1.default);
    }
    //this function initialize the server
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('server on port', this.app.get('port')); //muestra un sms
        });
    }
}
const server = new Server();
//start the server
server.start();
