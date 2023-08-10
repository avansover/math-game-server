export namespace CharacterCommandModel {

    export type DeleteCharacterById = CharacterByIdCommanModel
  
    export type GetCharacterById = CharacterByIdCommanModel

    export type AddCharacter = {
        userId: Number
        characterName: String
        classId: Number
    }
}

type CharacterByIdCommanModel = {
    characterId: Number
}