export namespace ClassCommandModel {

    export type DeleteClassById = classByIdCommanModel
  
    export type GetClassById = classByIdCommanModel

    export type AddClass = {
        className: String
        life: Number
    }
}

type classByIdCommanModel = {
    id: Number
}