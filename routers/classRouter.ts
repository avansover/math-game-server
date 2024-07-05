import express, { Router } from 'express';
import classBl from '../businessLogic/classBl';
import { ClassCommandModel } from '../types/class/commands';


const router = Router();

router.route('/get_all_classes').get(async (req, res) => {
    try {
        let resp = await classBl.getClasses();
        res.json(resp);
    } catch (error) {
        res.json(error)
    }
})


export default router;