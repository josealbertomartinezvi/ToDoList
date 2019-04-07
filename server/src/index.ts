import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';

//import the routes 
import indexRoutes from './routes/indexRoutes'; 
import peopleRoutes from './routes/peopleRoutes'; 
import tasksRoutes from './routes/tasksRoutes'; 
import assignmentsRoutes from './routes/assignmentsRoutes'; 


class Server{

    public app: Application; 

    constructor(){
        this.app = express(); 
        this.config();
        this.routes();
    }
    //configuration of the app 
    config(): void{ 
        this.app.set('port', process.env.PORT || 3000);//Configuration of the listening port
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());//this lets accept json format from client apps
    }                                   
    //configuration of server´s routes
    routes(): void{
        this.app.use('/', indexRoutes);
        this.app.use('/api/people/', peopleRoutes);
        this.app.use('/api/tasks/', tasksRoutes);
        this.app.use('/api/tasks/search/', tasksRoutes);
        this.app.use('/api/assignments/', assignmentsRoutes);
    }
    //this function initialize the server
    start(): void{ 
        this.app.listen(this.app.get('port'), () => {
            console.log('server on port', this.app.get('port'));//muestra un sms
        });
    }
}

const server = new Server();
//start the server
server.start();