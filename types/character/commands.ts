export namespace CharacterCommandModel {

    export type DeleteCharacterById = CharacterByIdCommanModel
  
    export type GeteCharacterById = CharacterByIdCommanModel

    export type AddCharacter = {
        userId: Number
        characterName: String
        classId: Number
    }
}

type CharacterByIdCommanModel = {
    characterId: Number
}