import userCharacterDal from "../dataAccessLayer/userCharacterDal";
import { UserCharacterCommandModel } from "../types/userCharacter/commands";

const userCharacterBl = {

    getUserCharacters:async () => {
        let resp = await userCharacterDal.getUserCharacters();
        return resp;
    },

    deleteUserCharacter:async (deleteUserCharacterRequest: UserCharacterCommandModel.DeleteUserCharacterById) => {
        let resp = await userCharacterDal.deleteUserCharacter(deleteUserCharacterRequest);
        return resp;
    }
}

export default userCharacterBl;