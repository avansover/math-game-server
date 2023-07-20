export namespace UserCharacterCommandModel {

    export type DeleteUserCharacterById = UserCharacterByIdCommanModel

    export type addUserCharacter = {
        userId: Number
        characterId: Number
    }

}

type UserCharacterByIdCommanModel = {
    userCharacterId: Number
}

