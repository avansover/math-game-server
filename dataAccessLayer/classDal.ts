import { Document, MongoClient, WithId } from "mongodb";
import { sqlQueryMaker } from "../apis/mysql";
import { ClassCommandModel } from "../types/class/commands";

const dbName = 'MathGame';

const classDal = {

    getAllClasses: async (client: MongoClient, collectionName: string): Promise<WithId<Document>[]> => {

        const db = client.db(dbName);
        const collection = db.collection(collectionName);

        let resp = await collection.find({}).toArray();

        console.log(resp);

        return resp;

    }


}

export default classDal;