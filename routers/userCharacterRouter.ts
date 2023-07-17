import express, { Router } from 'express';
import UserCharacterBl from '../businessLogic/UserCharacterBl';

const router = Router();

router.route('/get-all-users-characters').get(async (req: express.Request, res: express.Response)=>{
    const resp = await UserCharacterBl.getUserCharacters();
    return res.json(resp)
})

export default router;
