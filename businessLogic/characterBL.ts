import { testDAL } from "../dataAccessLayer/characterDAL"

export const testBL = async () => {
    var resp = await testDAL();
    return resp;
}