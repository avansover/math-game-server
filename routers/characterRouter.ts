import express, { Router } from 'express';
import characterBl from '../businessLogic/characterBl';
import { CharacterCommandModel } from '../types/character/commands'

const router = Router();

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
        const { characterId } = req.query;
        const deleteUserRequest: CharacterCommandModel.DeleteCharacterById = { characterId: Number(characterId) };
        const resp = await characterBl.deleteCharacter(deleteUserRequest);
        return res.json(resp);
    } catch (error) {
        console.log(error);
        return res.json(error);
    }
})

export default router;