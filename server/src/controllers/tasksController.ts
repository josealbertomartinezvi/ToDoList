import { Request, Response } from "express";

import pool from '../database';

class TasksController{
    // get task list of the data base
    public async tasksList (req: Request, res: Response) {
        const toDo = await pool.query('SELECT * FROM tasks;');
        res.json(toDo);
    } 
    // filter the task
    public async searchTasks (req: Request, res: Response) {
        const { name } = req.params;
        const search = await pool.query('SELECT * FROM tasks WHERE description LIKE "%'+name+'%"');
        res.json(search);
    }     
    // get task´s status (open, in progress, completed, archived)
    public async getStatus (req: Request, res: Response) {
        const status = await pool.query('SELECT * FROM status;');
        res.json(status);
    }     

    public async getOneTask(req: Request, res: Response): Promise<any>{
        const { id } = req.params;
        const task = await pool.query('SELECT * FROM tasks WHERE id = ?', [id]);
        if(task.length > 0){
            return res.json(task[0]);
        }else{
            return res.status(404).json({text: 'game didn´t found'});  
        } 
    }

    public async createTask (req: Request, res: Response): Promise<void>{
        await pool.query('INSERT INTO tasks set ?', [req.body]);
        res.json('Task created');
    }

    public async updateTask (req: Request, res: Response): Promise<void>{
        const { id } = req.params;
        await pool.query('UPDATE tasks set ? WHERE id = ?', [req.body, id]);      
        res.json('Task updated');
    }

    public async deleteTask (req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM tasks WHERE id = ?', [id]);
        res.json('task deleted');
    }        


}

const tasksController = new TasksController();
export default tasksController;