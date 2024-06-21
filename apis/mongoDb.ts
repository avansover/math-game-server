import { MongoClient } from 'mongodb';
import { Collection } from '../types/enum';

const url = 'mongodb+srv://Amir:Pushkin1@mathgame.xoczqh8.mongodb.net/?retryWrites=true&w=majority&appName=MathGame';
const client = new MongoClient(url);

const dbName = 'MathGame';

export const MongoConnection = async (): Promise<MongoClient> => {

    try {

        await client.connect();
        console.log('[MongoConnection] Connected successfully to database');
        return client;

    } catch (error) {

        console.log('[MongoConnection] - error');
        console.log(error);
        throw error;

    }
}

export const MongoQuery = async (client: MongoClient, collection: string) => {

    try {

        const db = client.db(dbName);
        const collection = db.collection(Collection.Player);

        let findResult = await collection.find({}).toArray();
        console.log(findResult);

        return findResult;

    } catch (error) {

        console.log('[MongoQuery] - error');
        console.log(error);
        throw error;

    } finally {

        client.close();

    }
}
