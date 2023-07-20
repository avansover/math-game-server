import userDal from "../dataAccessLayer/userDal"
import { UserCommandModel } from "../types/user/commnads";
import { UserQueryModel } from "../types/user/queries";

const userBl = {

    getUsers: async () => {
        let resp = await userDal.getUser();
        return resp;
    },

    getUsersById: async (UserByIdRequest: UserQueryModel.GeteUserById) => {

        let UserCharacters = await userDal.getUserById(UserByIdRequest);

        const nestedResult = UserCharacters.reduce((acc: any, obj: any) => {

            const user = acc.find((userObj: any) => userObj.userId === obj.UserId);
            if (!user) {
                acc.push({
                    userId: obj.UserId,
                    UserName: obj.UserName,
                    Password: obj.Password,
                    Characters: [{ CharacterId: obj.CharacterId, Name: obj.Name }]
                });
            } else {
                user.Characters.push({ CharacterId: obj.CharacterId, Name: obj.Name });
            }

            return acc;
        }, [])

        return nestedResult;
    },

    addUser: async (addUserRequest: UserCommandModel.AddUser) => {
        let resp = await userDal.addUser(addUserRequest)
        return resp;
    },

    deleteUser: async (deleteUserRequest: UserCommandModel.DeleteUserById) => {
        let resp = await userDal.deleteUser(deleteUserRequest)
        return resp
    }
}


export default userBl;