import express, { Router } from 'express';
import userBl from '../businessLogic/userBl';
import { UserCommandModel } from '../types/user/commnads';
import { UserQueryModel } from '../types/user/queries';

const router = Router();

router.route('/get-users').get(async (req, res) => {
    try {
        let resp = await userBl.getUsers();
        return res.json(resp);
    } catch (error) {
        return res.json(error)
    }
})

router.route('/get-user-by-id').get(async (req, res) => {
    try {
        const { userId } = req.query;
        const getUserByIdRequest: UserQueryModel.GeteUserById = { userId: Number(userId) };
        const resp = await userBl.getUsersById(getUserByIdRequest);
        return res.json(resp);
    } catch (error) {
        return error;
    }
})

router.route('/add-user').post(async (req: express.Request, res: express.Response) => {
    try {
        const addUserRequest: UserCommandModel.AddUser = req.body;
        const resp = await userBl.addUser(addUserRequest);
        return res.json(resp);
    } catch (error) {
        return error;
    }
})

router.route('/delete-user').delete(async (req: express.Request, res: express.Response) => {
    try {
        const { userId } = req.query;
        //const test: UserCommandModel.DeleteUserById = req.query;
        const deleteUserRequest: UserCommandModel.DeleteUserById = { userId: Number(userId) };
        const resp = await userBl.deleteUser(deleteUserRequest);
        return res.json(resp);
    } catch (error) {
        console.log(error);
        return res.json(error);
    }
})

export default router;