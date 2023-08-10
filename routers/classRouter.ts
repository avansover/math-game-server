import express, { Router } from 'express';
import classBl from '../businessLogic/classBl';
import { ClassCommandModel } from '../types/class/commands';


const router = Router();

router.route('/get-classes').get(async (req, res) => {
    try {
        let resp = await classBl.getClasses();
        return res.json(resp);
    } catch (error) {
        return res.json(error)
    }
})

router.route('/add-class').post(async (req, res) => {
    try {
        const addClassCommand: ClassCommandModel.AddClass = req.body;  
        let resp = await classBl.addClass(addClassCommand);
        return res.json(resp);
    } catch (error) {
        return res.json(error)
    }
})

router.route('/delete-class').delete(async (req, res) => {
    try {
        const { id } = req.query;
        const deleteClassCommand: ClassCommandModel.DeleteClassById = { id: Number(id) };
        let resp = await classBl.deleteClass(deleteClassCommand);
        return res.json(resp);
    } catch (error) {
        return res.json(error)
    }
})

export default router;