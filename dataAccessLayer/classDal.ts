import { sqlQueryMaker } from "../apis/mysql";
import { ClassCommandModel } from "../types/class/commands";

const classDal = {
    getClasses: async () => {
        let query = "SELECT * FROM Class";
        let resp = await sqlQueryMaker(query);
        return resp;
    },

    addClass: async (addClassCommand: ClassCommandModel.AddClass) => {

        let query = 'INSERT INTO Class ( ClassName, Life ) VALUES (?, ?);';
        let params = [addClassCommand.className, addClassCommand.life];  
        let resp = await sqlQueryMaker(query, params);
        return resp;
    },

    deleteClass: async (deleteClassCommand: ClassCommandModel.DeleteClassById) => {
        let query = 'DELETE FROM Class WHERE Id = ?;';
        let params = [deleteClassCommand.id]
        let resp = await sqlQueryMaker(query, params);
        return resp;
    }


}

export default classDal;