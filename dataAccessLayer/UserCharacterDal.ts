import { OkPacket } from "mysql2";
import { sqlQueryMaker } from "../apis/mysql";
import { UserCharacterCommandModel } from "../types/userCharacter/commands";

const UserCharacterDal = {

    getUserCharacters: async () => {
        let query = "SELECT * FROM UserCharacter";
        let resp = await sqlQueryMaker(query);
        return resp;
    },

    addUserCharacter: async (addUserCharacter: UserCharacterCommandModel.addUserCharacter): Promise<OkPacket> => {
        const query = `
        INSERT INTO \`UserCharacter\` ( UserId, CharacterId )
        VALUES (?, ?);
       `;

        let params = [addUserCharacter.userId, addUserCharacter.characterId];
        let resp = await sqlQueryMaker(query, params);
        console.log(resp);
        return resp;
    }

}

export default UserCharacterDal;