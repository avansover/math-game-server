import userDal from "../dataAccessLayer/userDal"
import {  UserCommandModel } from "../types/user/commnads";

const userBl = {

    getUsers: async () => {
        let resp = await userDal.getUser();
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