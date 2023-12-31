import express, { Router } from 'express';
import userCharacterBl from '../businessLogic/UserCharacterBl';
import { UserCharacterCommandModel } from '../types/userCharacter/commands';

const router = Router();

router.route('/get-all-users-characters').get(async (req: express.Request, res: express.Response) => {
    const resp = await userCharacterBl.getUserCharacters();
    return res.json(resp)
})

router.route('/delete-user-character').delete(async (req: express.Request, res: express.Response) => {
    try {
        const { userCharacterId } = req.query;
        const deleteUserCharacterRequest: UserCharacterCommandModel.DeleteUserCharacterById = { userCharacterId: Number(userCharacterId) };
        const resp = await userCharacterBl.deleteUserCharacter(deleteUserCharacterRequest)
        return res.json(resp)
    } catch (error) {
        return res.json(error)
    }
})

export default router;
