import express, { Router } from 'express';
import userBl from '../businessLogic/userBl';
import { UserCommandModel } from '../types/user/commnads';
import { UserQueryModel } from '../types/user/queries';
import classBl from '../businessLogic/class';

const router = Router();

router.route('/get-classes').get(async (req, res) => {
    try {
        let resp = await classBl.getClasses();
        return res.json(resp);
    } catch (error) {
        return res.json(error)
    }
})

export default router;