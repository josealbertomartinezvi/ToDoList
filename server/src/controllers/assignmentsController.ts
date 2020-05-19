import { Request, Response } from "express";

import pool from '../database';

class AssignmentsController{

    public async getAssignments(req: Request, res: Response): Promise<any>{
        const { id } = req.params;
        const people = await pool.query('SELECT description, people.id as peopleId, name, last_name FROM tasks, people, tasks_has_people where tasks.id=? && tasks_has_people.tasks_id=? && people.id=tasks_has_people.people_id', [id, id]);
        if(people.length > 0){
            return res.json(people);
        }else{
            return res.json({});  
        }
    }

    public async getDidntAssignPeople (req: Request, res: Response) {
        const people = await pool.query('SELECT * FROM people WHERE people.id NOT IN (SELECT people.id FROM people, tasks_has_people where tasks_has_people.tasks_id = ? and people.id=tasks_has_people.people_id);', [req.params.id]);
        res.json(people);
    }         

    public async createAssignment (req: Request, res: Response): Promise<void>{
        await pool.query('INSERT INTO tasks_has_people set ?', [req.body]);
        res.json('Assignment created');
    }

    public async deleteAssignment (req: Request, res: Response): Promise<void> {
        await pool.query('DELETE FROM tasks_has_people WHERE tasks_id = ? && people_id = ?', [req.params.taskId, req.params.personId]);
        res.json('Assignment deleted');
    }        


}

const assignmentsController = new AssignmentsController();
export default assignmentsController;
