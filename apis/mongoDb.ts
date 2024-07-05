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

    } catch (error: any) {

        if (error.name === 'MongoNetworkError') {
            console.error('[MongoConnection] - Network error:', error.message);
        } else if (error.name === 'MongoServerSelectionError') {
            console.error('[MongoConnection] - Server selection error:', error.message);
        } else {
            console.error('[MongoConnection] - General error:', error.message);
        }
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
