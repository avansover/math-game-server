import { MongoConnection } from "../apis/mongoDb";
import characterDal from "../dataAccessLayer/characterDAL"
import { CharacterCommandModel } from "../types/character/commands";
import { Collection } from "../types/enum";
import { GeneralResponse } from "../types/generalResponse";

const characterBl = {

    getCharacters: async () => {
        let resp = await characterDal.getCharacters();
        return resp;
    },

    addCharacter: async (addCharacterRequest: CharacterCommandModel.AddCharacter) => {

        let retVal = new GeneralResponse()
        let mongoClient = await MongoConnection();

        try {

            let characterDeleteResult = await characterDal.addCharacter(mongoClient, Collection.Character, addCharacterRequest);

            console.log(characterDeleteResult);


            return retVal;

        } catch (error: any) {

            retVal.errors.push(error.message);
            return retVal;

        } finally {

            mongoClient.close;

        }

    },

    deleteCharacter: async (deleteCharacterRequest: CharacterCommandModel.DeleteCharacterById) => {

        // let mongoClient = await MongoConnection();

        // let resp = await characterDal.deleteCharacter(mongoClient, Collection.Character, deleteCharacterRequest)
        // return resp
    }

}


export default characterBl