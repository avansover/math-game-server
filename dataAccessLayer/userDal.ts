import { sqlQueryMaker } from "../apis/mysql";
import { UserCommandModel } from "../types/user/commnads";
import { UserQueryModel } from "../types/user/queries";

const userDal = {

    getUser: async () => {
        let query = "SELECT * FROM User";
        let resp = await sqlQueryMaker(query);
        return resp;
    },

    getUserById: async (UserByIdRequest: UserQueryModel.GeteUserById) => {
        let query = "SELECT * FROM User WHERE Id = ?";
        let params = [`${UserByIdRequest.userId}`]
        let resp = await sqlQueryMaker(query, params);
        return resp;
    },

    addUser: async (addUserRequestModel: UserCommandModel.AddUser) => {
        let query = 'INSERT INTO User ( UserName ) VALUES (?);';
        let params = [`${addUserRequestModel.userName}`]
        let resp = await sqlQueryMaker(query, params);
        return resp;
    },

    deleteUser: async (deleteUserRequest: UserCommandModel.DeleteUserById) => {
        let query = 'DELETE FROM User WHERE Id = ?;';
        let params = [deleteUserRequest.userId]
        let resp = await sqlQueryMaker(query, params);
        return resp;
    }
}

export default userDal;
