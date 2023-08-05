import classDal from "../dataAccessLayer/classDal";

const classBl = {
    getClasses: async () => {
        let resp = await classDal.getClasses();
        return resp;
    },
}

export default classBl;