import express, { Router } from 'express';
import characterBl from '../businessLogic/characterBL';
import { CharacterCommandModel } from '../types/character/commands'
import { ObjectId } from 'mongodb';

const router = Router();

const isValidObjectId = (id: string): boolean => {
    console.log('isValidObjectId');

    var retVal = /^[0-9a-fA-F]{24}$/.test(id);

    console.log('isValidObjectId retVal', retVal);
    
    return retVal;
}

router.route('/get-characters').get(async (req: express.Request, res: express.Response)=>{
    let resp = await characterBl.getCharacters()
    return res.json(resp)
})

router.route('/add-character').post(async (req: express.Request, res: express.Response)=>{
   
    const addCharacterRequest: CharacterCommandModel.AddCharacter = req.body;
    let resp = await characterBl.addCharacter(addCharacterRequest);
    return res.json(resp);;
})

router.route('/delete-character').delete(async (req: express.Request, res: express.Response) => {
    try {

        const playerId = req.query['playerId'] as string;
        const classId = req.query['classId'] as string;

        if (!playerId) {
            throw new Error("Player ID is required");
        }

        if (!isValidObjectId(playerId)) {
            throw new Error("Invalid Player ID format");
        }

        const deletePlayerCommand: CharacterCommandModel.AddCharacter = { playerId: new ObjectId(playerId), classId: new ObjectId(classId), characterName: "Agamgamona" };
      
        res.json();

    } catch (error) {

        console.log(error);
        res.json(error);

    }
})

export default router;