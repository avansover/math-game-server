import { MongoConnection } from "../apis/mongoDb";
import classDal from "../dataAccessLayer/classDal";
import { Collection } from "../types/enum";
import { GeneralResponse } from "../types/generalResponse";

const classBl = {

    getClasses: async (): Promise<GeneralResponse> => {

        let retVal = new GeneralResponse()

        try {

            let mongoClient = await MongoConnection();

            let resp = await classDal.getAllClasses(mongoClient, Collection.Class);
            retVal.data = resp;
            return retVal;

        } catch (error: any) {

            retVal.errors.push(error.message);
            return retVal;

        }


    }

}

export default classBl;