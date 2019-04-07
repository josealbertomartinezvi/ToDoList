import { Request, Response } from "express";

import pool from '../database';

class PeopleController{

    public async getPeople (req: Request, res: Response) {
        const people = await pool.query('SELECT * FROM people;');
        res.json(people);
    } 

    public async getOne(req: Request, res: Response): Promise<any>{
        const { id } = req.params;
        const person = await pool.query('SELECT * FROM people WHERE id = ?', [id]);
        if(person.length > 0){
            return res.json(person[0]);
        }else{
            return res.status(404).json({text: 'Person didn´t found'});  
        } 
    }    

    public async create (req: Request, res: Response): Promise<void>{
        await pool.query('INSERT INTO people set ?', [req.body]);
        res.json('person saved');
    }

    public async update (req: Request, res: Response): Promise<void>{
        const { id } = req.params;
        await pool.query('UPDATE people set ? WHERE id = ?', [req.body, id]);        
        res.json('person updated');
    }

    public async delete (req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM people WHERE id = ?', [id]);
        res.json('person deleted');
    }        

}

const peopleController = new PeopleController();
export default peopleController;