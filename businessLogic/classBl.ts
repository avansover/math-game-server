import classDal from "../dataAccessLayer/classDal";
import { ClassCommandModel } from "../types/class/commands";

const classBl = {
    getClasses: async () => {
        let resp = await classDal.getClasses();
        return resp;
    },

    addClass: async (addClassCommand: ClassCommandModel.AddClass) => {
        let resp = await classDal.addClass(addClassCommand);
        return resp;
    },

    deleteClass: async (deleteClassCommand: ClassCommandModel.DeleteClassById) => {
        let resp = await classDal.deleteClass(deleteClassCommand);
        return resp;
    },
}

export default classBl;