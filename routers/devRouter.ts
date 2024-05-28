import express, { Router } from 'express';
import { MongoConnection } from "../apis/mongoDb";

const router = Router();

router.route('/get_dev').get(async (req, res) => {
    try {
        let test = await MongoConnection().finally()

        console.log("test get_dev");
        console.log(test);
        return res.json("Ok")
    } catch (error) {
        return res.json(error)
    } 
})


export default router;