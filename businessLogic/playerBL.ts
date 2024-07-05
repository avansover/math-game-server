import { promises } from "dns";
import { MongoConnection } from "../apis/mongoDb";
import playerDal from "../dataAccessLayer/playerDal";
import { Collection } from "../types/enum";
import { GeneralResponse } from "../types/generalResponse";
import { PlayerCommandModel } from "../types/player/commnads";
import characterDal from "../dataAccessLayer/characterDAL";
import { DeletePlayerResp } from "./Responses/deletePlayerResp";

const playerBl = {

    getPlayers: async (): Promise<GeneralResponse> => {

        let retVal = new GeneralResponse()

        try {

            let mongoClient = await MongoConnection();
            let players = await playerDal.getAllPlayers(mongoClient, Collection.Player)
            retVal.data = players
            return retVal

        } catch (error: any) {

            retVal.errors.push(error.message)
            return retVal

        }
    },

    addPlayer: async (addPlayeCommand: PlayerCommandModel.AddPlayer): Promise<GeneralResponse> => {

        let retVal = new GeneralResponse()

        try {

            let mongoClient = await MongoConnection();
            await playerDal.addPlayer(mongoClient, Collection.Player, addPlayeCommand)
            return retVal

        } catch (error: any) {

            retVal.errors.push(error.message)
            return retVal
        }


    },

    deletePlayer: async (deletePlayerCommand: PlayerCommandModel.DeletePlayerById): Promise<GeneralResponse> => {

        let retVal = new GeneralResponse()
        let mongoClient = await MongoConnection();

        try {
            
            let characterDeleteResult = await characterDal.deleteCharacter(mongoClient, Collection.Character, deletePlayerCommand);
            
            let playerDeleteResult = await playerDal.deletePlayer(mongoClient, Collection.Player, deletePlayerCommand);

            let deletePlayerResp = new DeletePlayerResp(playerDeleteResult.acknowledged, playerDeleteResult.deletedCount, characterDeleteResult.acknowledged, characterDeleteResult.deletedCount);
            retVal.data = deletePlayerResp;

            console.log('[deletePlayer] deletePlayerResp:');
            console.log(deletePlayerResp);

            return retVal;

        } catch (error: any) {

            retVal.errors.push(error.message);
            return retVal;

        } finally {

            mongoClient.close;

        }

    }
}


export default playerBl;