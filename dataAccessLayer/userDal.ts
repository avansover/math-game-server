import { sqlQueryMaker } from "../apis/mysql";
import { UserCommandModel } from "../types/user/commnads";

const userDal = {

    getUser: async () => {
        let query = "SELECT * FROM user";
        let resp = await sqlQueryMaker(query);
        return resp;
    },

    addUser: async (addUserRequestModel: UserCommandModel.AddUser) => {
        let query = 'INSERT INTO user ( user_name ) VALUES (?)';
        let params = [`${addUserRequestModel.userName}`]
        let resp = await sqlQueryMaker(query, params);
        return resp;
    },

    deleteUser: async (deleteUserRequest: UserCommandModel.DeleteUserById) => {
        let query = "DELETE FROM user WHERE id = ?";
        let params = [deleteUserRequest.userId]
        let resp = await sqlQueryMaker(query, params);
        return resp;
    }
}

export default userDal;
