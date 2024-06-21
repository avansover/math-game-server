import { ObjectId } from "mongodb"

export namespace PlayerCommandModel {

    export type DeletePlayerById = PlayerByIdCommanModel

    export type GetePlayerById = PlayerByIdCommanModel

    export type AddPlayer = {
        name: String
    }

}

type PlayerByIdCommanModel = {
    userId: ObjectId
}