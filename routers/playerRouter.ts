import express, { Router } from 'express';
import playerBL from '../businessLogic/playerBL';
import { PlayerCommandModel } from '../types/player/commnads';
import { ObjectId } from 'mongodb';

const router = Router();

const isValidObjectId = (id: string): boolean => {
    console.log('isValidObjectId');

    var retVal = /^[0-9a-fA-F]{24}$/.test(id);

    console.log('isValidObjectId retVal', retVal);
    
    return retVal;
}



router.route('/get_all_players').get(async (req: express.Request, res: express.Response): Promise<void> => {
    try {

        let resp = await playerBL.getPlayers();
        console.log(resp);
        res.json(resp);

    } catch (error: any) {
        let errorArray: string[] = []
        errorArray.push(error.message)
        res.json({ data: null })
    }
})

router.route('/add_player').post(async (req: express.Request, res: express.Response): Promise<void> => {
    try {
        const addPlayerCommand: PlayerCommandModel.AddPlayer = req.body;

        if (addPlayerCommand.name == null || addPlayerCommand.name.length == 0) {
            throw "name length can't be null or empty"
        }

        let resp = await playerBL.addPlayer(addPlayerCommand);
        console.log(resp);


        res.json(resp);
    } catch (error) {
        res.json(error)
    }
})

router.route('/delete_player').delete(async (req: express.Request, res: express.Response): Promise<void> => {
    try {

        const playerId = req.query['playerId'] as string;

        if (!playerId) {
            throw new Error("Player ID is required");
        }

        if (!isValidObjectId(playerId)) {
            throw new Error("Invalid Player ID format");
        }

        const deletePlayerCommand: PlayerCommandModel.DeletePlayerById = { playerId: new ObjectId(playerId) };
        let resp = await playerBL.deletePlayer(deletePlayerCommand);

        res.json(resp);
 

    } catch (error: any) {

        let errorArray: string[] = []
        errorArray.push(error.message)
        res.json({ data: null, errors: errorArray })
    }
})

export default router;