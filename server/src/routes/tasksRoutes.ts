//definir enrutador
import { Router } from 'express';

import tasksController from '../controllers/tasksController';

class TasksRoutes {

    public router: Router = Router(); 

    constructor(){
        this.config();
    }
    //routes to get tasks
    config(): void{
        this.router.get('/', tasksController.tasksList);
        this.router.get('/status', tasksController.getStatus);
        this.router.get('/search/:name', tasksController.searchTasks);
        this.router.get('/:id', tasksController.getOneTask);
        this.router.post('/', tasksController.createTask);
        this.router.put('/:id', tasksController.updateTask);
        this.router.delete('/:id', tasksController.deleteTask);        
    }
}

const tasksRoutes = new TasksRoutes();
export default tasksRoutes.router;