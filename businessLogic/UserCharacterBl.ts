import UserCharacterDal from "../dataAccessLayer/UserCharacterDal";
import { UserCharacterCommandModel } from "../types/userCharacter/commands";

const UserCharacterBl = {

    getUserCharacters:async () => {
        let resp = await UserCharacterDal.getUserCharacters();
        return resp;
    },

    deleteUserCharacter:async (deleteUserCharacterRequest: UserCharacterCommandModel.DeleteUserCharacterById) => {
        let resp = await UserCharacterDal.deleteUserCharacter(deleteUserCharacterRequest);
        return resp;
    }
}

export default UserCharacterBl;