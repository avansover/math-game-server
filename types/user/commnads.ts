export namespace UserCommandModel {

    export type DeleteUserById = UserByIdCommanModel

    export type GeteUserById = UserByIdCommanModel

    export type AddUser = {
        userName: String
    }

}

type UserByIdCommanModel = {
    userId: Number
}