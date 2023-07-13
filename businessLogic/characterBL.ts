import { testDAL } from "../dataAccessLayer/characterDal"

export const testBl = async () => {
    let resp = await testDAL();
    return resp;
}