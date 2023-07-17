export namespace CharacterCommandModel {

    export type DeleteCharacterById = CharacterByIdCommanModel
  
    export type GeteCharacterById = CharacterByIdCommanModel

    export type AddCharacter = {
        userId: Number
        name: String
        classId: Number
    }
}

type CharacterByIdCommanModel = {
    characterId: Number
}