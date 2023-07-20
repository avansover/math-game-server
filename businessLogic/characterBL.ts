import characterDal from "../dataAccessLayer/characterDal"
import { CharacterCommandModel } from "../types/character/commands";
import { UserCharacterCommandModel } from "../types/userCharacter/commands";
import UserCharacterDal from "../dataAccessLayer/UserCharacterDal";

const characterBl = {

    getCharacters: async () => {
        let resp = await characterDal.getCharacters();
        return resp;
    },

    addCharacter: async (addCharacterRequest: CharacterCommandModel.AddCharacter) => {

        const addCharacterResp = await characterDal.addCharacter(addCharacterRequest);

        const addUserCharacterRequest: UserCharacterCommandModel.addUserCharacter = {
            userId: addCharacterRequest.userId,
            characterId: addCharacterResp.insertId
        };

        const addUserCharacterResp = await UserCharacterDal.addUserCharacter(addUserCharacterRequest);

        return addUserCharacterResp;
    },

    deleteCharacter: async (deleteCharacterRequest: CharacterCommandModel.DeleteCharacterById) => {
        let resp = await characterDal.deleteCharacter(deleteCharacterRequest)
        return resp
    }

}


export default characterBl