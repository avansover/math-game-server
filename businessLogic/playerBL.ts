import { MongoConnection } from "../apis/mongoDb";
import playerDal from "../dataAccessLayer/playerDal";
import { Collection } from "../types/enum";
import { PlayerCommandModel } from "../types/player/commnads";

const playerBl = {

    getPlayers: async () => {

        let mongoClient = await MongoConnection();
        let players = await playerDal.getAllPlayers(mongoClient, Collection.Player)
        return players;
    },

    addPlayer: async (addPlayeCommand: PlayerCommandModel.AddPlayer) => {

        let mongoClient = await MongoConnection();
        let players = await playerDal.addPlayer(mongoClient, Collection.Player, addPlayeCommand)
        return players;
    }
}


export default playerBl;