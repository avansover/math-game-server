export namespace UserCommandModel {
    export type DeleteUserById = UserByIdCommanModel
    export type GeteUserById = UserByIdCommanModel
    export type AddUser = {
        userName: String
    }

   
}


export type UserByIdCommanModel = {
    userId: Number
}