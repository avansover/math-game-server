import { ObjectId } from "mongodb"

export namespace PlayerCommandModel {

    export type DeletePlayerById = PlayerByIdCommanModel

    export type GetPlayerById = PlayerByIdCommanModel

    export type AddPlayer = {
        name: String
    }

}

type PlayerByIdCommanModel = {
    playerId: ObjectId
}