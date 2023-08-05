import { sqlQueryMaker } from "../apis/mysql";

const classDal = {
    getClasses: async () => {
        let query = "SELECT * FROM Class";
        let resp = await sqlQueryMaker(query);
        return resp;
    },
}

export default classDal;