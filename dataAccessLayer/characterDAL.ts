import { OkPacket } from "mysql2";
import { sqlQueryMaker } from "../apis/mysql";
import { CharacterCommandModel } from "../types/character/commands";

const characterDal = {

    getCharacters: async () => {
        let query = "SELECT * FROM `Character`";
        let resp = await sqlQueryMaker(query);
        return resp;
    },

    addCharacter: async (addCharacterRequest: CharacterCommandModel.AddCharacter) : Promise<OkPacket> => {
        const query = `
         INSERT INTO \`Character\` (Name, ClassId)
         VALUES (?, ?);
        `;

        let params = [addCharacterRequest.name, addCharacterRequest.classId];
        let resp = await sqlQueryMaker(query, params);
        console.log(resp);
        return resp;
    },

    deleteCharacter: async (deleteCharacterRequest: CharacterCommandModel.DeleteCharacterById) => {
        let query = 'DELETE FROM `Character` WHERE Id = ?;';
        let params = [deleteCharacterRequest.characterId]
        let resp = await sqlQueryMaker(query, params);
        return resp;
    }
}

export default characterDal;
