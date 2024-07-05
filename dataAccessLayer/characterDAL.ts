import { DeleteResult, Document, InsertOneResult, MongoClient, ObjectId } from "mongodb";
import { CharacterCommandModel } from "../types/character/commands";
import { PlayerCommandModel } from "../types/player/commnads";

const dbName = 'MathGame';

const characterDal = {

    getCharacters: async () => {

    },

    addCharacter: async (client: MongoClient, collectionName: string, addCharacterCommand: CharacterCommandModel.AddCharacter) : Promise<InsertOneResult<Document>> => {

        try {

            const db = client.db(dbName);
            const characterCollection = db.collection(collectionName);

            var resp = await characterCollection.insertOne({ playerId: addCharacterCommand.playerId  ,classId: addCharacterCommand.classId, name: "character name" })

            console.log('[addCharacter resp]', resp);

            return resp

        } catch (error) {

            console.log('[addCharacter] - error');
            console.log(error);
            throw error;

        }
    },

    deleteCharacter: async (client: MongoClient, collectionName: string, deletePlayerCommandModel: PlayerCommandModel.DeletePlayerById): Promise<DeleteResult> => {


        console.log('deleteCharacter dal');
        try {

            const db = client.db(dbName);
            const characterCollection = db.collection(collectionName);

            var resp = await characterCollection.deleteMany({ playerId: new ObjectId(deletePlayerCommandModel.playerId) });

            console.log('[deleteCharacter resp]', resp);

            console.log(`characters for player ${deletePlayerCommandModel.playerId} were deleted`);

            return resp

        } catch (error) {

            console.log('[addCharacter] - error');
            console.log(error);
            throw error;

        }
    }


}

export default characterDal;
