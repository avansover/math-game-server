//const { MongoClient } = require('mongodb');
import { MongoClient } from 'mongodb';

const url = 'mongodb+srv://Amir:Amir123456@mathgame.xoczqh8.mongodb.net/?retryWrites=true&w=majority&appName=MathGame';
const client = new MongoClient(url);

const dbName = 'MathGame';

export const MongoConnection = async () => {
    // Use connect method to connect to the server
    try {

        await client.connect();
        console.log('Connected successfully to server');
        const db = client.db(dbName);
        const collection = db.collection('Player');

        // the following code examples can be pasted here...
        let findResult = await collection.find({}).toArray();

        return findResult;

    } catch (error) {
        console.log(error);

    } finally {
        client.close()
    }
}
