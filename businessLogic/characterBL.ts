import { OkPacket } from "mysql2";
import characterDal from "../dataAccessLayer/characterDal"
import { CharacterCommandModel } from "../types/character/commands";

const characterBl = {

    getCharacters: async () => {
        let resp = await characterDal.getCharacters();
        return resp;
    },

    addCharacter: async (addCharacterRequest: CharacterCommandModel.AddCharacter) : Promise<OkPacket>  => {
        let resp = await characterDal.addCharacter(addCharacterRequest);
        return resp;
    },

    deleteCharacter: async (deleteCharacterRequest: CharacterCommandModel.DeleteCharacterById) => {
        let resp = await characterDal.deleteCharacter(deleteCharacterRequest)
        return resp
    }

}


export default characterBl