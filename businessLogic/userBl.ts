import userDal from "../dataAccessLayer/userDal"
import {  UserCommandModel } from "../types/user/commnads";
import { UserQueryModel } from "../types/user/queries";

const userBl = {

    getUsers: async () => {
        let resp = await userDal.getUser();
        return resp;
    },

    getUsersById: async (UserByIdRequest: UserQueryModel.GeteUserById) => {
        let resp = await userDal.getUserById(UserByIdRequest);
        return resp;
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