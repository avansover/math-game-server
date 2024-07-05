import { ObjectId } from "mongodb"

export namespace CharacterCommandModel {

    export type DeleteCharacterById = CharacterByIdCommanModel
  
    export type GetCharacterById = CharacterByIdCommanModel

    export type AddCharacter = {
        playerId: ObjectId
        characterName: String
        classId: ObjectId
    }
}

type CharacterByIdCommanModel = {
    characterId: ObjectId
}