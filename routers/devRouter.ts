import express, { Router } from 'express';
import { MongoConnection, MongoQuery } from "../apis/mongoDb";
import { Collection } from '../types/enum';

const router = Router();

router.route('/get_dev').get(async (req, res) => {
    try {
        let mongoClient  = await MongoConnection();
        let retVal = await MongoQuery(mongoClient, Collection.Player);

        console.log("test get_dev");
        console.log(retVal);
       
        return res.json("Ok")
    } catch (error) {
        return res.json(error)
    } 
})


export default router;