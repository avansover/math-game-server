export namespace CharacterCommandModel {

    export type DeleteCharacterById = CharacterByIdCommanModel
  
    export type GeteCharacterById = CharacterByIdCommanModel

    export type AddCharacter = {
        name: String
        classId: Number
    }

}

type CharacterByIdCommanModel = {
    characterId: Number
}