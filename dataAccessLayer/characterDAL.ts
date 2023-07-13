import { sqlQueryMaker } from "../apis/mysql";

export const testDAL = async () => {
    let query = "SELECT * FROM Characters";
    let resp = await sqlQueryMaker(query);
    return resp;
}