import UserCharacterDal from "../dataAccessLayer/UserCharacterDal";

const UserCharacterBl = {

    getUserCharacters:async () => {
        let resp = await UserCharacterDal.getUserCharacters();
        return resp;
    },
}

export default UserCharacterBl;