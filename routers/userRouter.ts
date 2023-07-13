import express, { Router } from 'express';
import userBl from '../businessLogic/userBl';
import { UserByIdCommanModel, UserCommandModel } from '../types/user/commnads';

const router = Router();

router.route('/get-users').get(async (req, res) => {
    let resp = await userBl.getUsers();
    return res.json(resp);
})

router.route('/get-user-by-id').get(async (req, res) => {
    return res.json("get-user-by-id");
})

router.route('/add-user').post(async (req, res) => {

    try {
        let addUserRequest: UserCommandModel.AddUser = req.body
        let resp = await userBl.addUser(addUserRequest)
        return res.send(resp);
    } catch (error) {
        return error;
    }

})

router.route('/delete-user').delete(async (req: express.Request, res: express.Response) => {

    const { userId } = req.query;
    const deleteUserRequest: UserCommandModel.DeleteUserById = { userId: Number(userId) };
    const resp = await userBl.deleteUser(deleteUserRequest);
    return res.send(resp);
    
})


export default router;