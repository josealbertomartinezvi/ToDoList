//definir enrutador
import { Router } from 'express';

import assignmentsController from '../controllers/assignmentsController';

class AssignmentsRoutes {

    public router: Router = Router(); 

    constructor(){
        this.config();
    }
    //routes to assign tasks
    config(): void{
        this.router.get('/anyOne/:id', assignmentsController.getDidntAssignPeople);
        this.router.get('/:id', assignmentsController.getAssignments);
        this.router.post('/', assignmentsController.createAssignment);
        this.router.delete('/:taskId/:personId', assignmentsController.deleteAssignment);        
    }
}

const assignmentsRoutes = new AssignmentsRoutes();
export default assignmentsRoutes.router;