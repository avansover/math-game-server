import { OkPacket } from "mysql2";
import { sqlQueryMaker } from "../apis/mysql";
import { UserCharacterCommandModel } from "../types/userCharacter/commands";

const UserCharacterDal = {

    getUserCharacters: async () => {
        let query = "SELECT * FROM UserCharacter";
        let resp = await sqlQueryMaker(query);
        return resp;
    },

    addUserCharacter: async (addUserCharacterRequest: UserCharacterCommandModel.addUserCharacter): Promise<OkPacket> => {
        const query = `
        INSERT INTO \`UserCharacter\` ( UserId, CharacterId )
        VALUES (?, ?);
        `;

        let params = [addUserCharacterRequest.userId, addUserCharacterRequest.characterId];
        let resp = await sqlQueryMaker(query, params);
        console.log(resp);
        return resp;
    },

    deleteUserCharacter:async (deleteUserCharacterRequest: UserCharacterCommandModel.DeleteUserCharacterById) => {
        let query = 'DELETE FROM UserCharacter WHERE Id = ?;';
        let params = [deleteUserCharacterRequest.userCharacterId];
        let resp = await sqlQueryMaker(query, params);
        return resp;
    }

}

export default UserCharacterDal;