import express, { Router } from 'express';
import userBl from '../businessLogic/userBl';
import playerBL from '../businessLogic/playerBL';
import { UserCommandModel } from '../types/user/commnads';
import { UserQueryModel } from '../types/user/queries';
import { PlayerCommandModel } from '../types/player/commnads';

const router = Router();

router.route('/get_all_players').get(async (req, res) => {
    try {

        let resp = await playerBL.getPlayers();
        console.log(resp);

        return res.json(resp);
    } catch (error) {
        return res.json(error)
    }
})

router.route('/add_player').post(async (req: express.Request, res: express.Response) => {
    try {
        const addCharacterRequest: PlayerCommandModel.AddPlayer = req.body;
        let resp = await playerBL.addPlayer(addCharacterRequest);
        console.log(resp);
        return res.json(resp);
    } catch (error) {
        return res.json(error)
    }
})


export default router;