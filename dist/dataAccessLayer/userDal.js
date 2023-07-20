"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_1 = require("../apis/mysql");
const userDal = {
    getUser: () => __awaiter(void 0, void 0, void 0, function* () {
        let query = "SELECT * FROM User";
        let resp = yield (0, mysql_1.sqlQueryMaker)(query);
        return resp;
    }),
    getUserById: (UserByIdRequest) => __awaiter(void 0, void 0, void 0, function* () {
        let query = `SELECT * FROM User AS U
        JOIN UserCharacter AS UC ON UC.UserId = U.Id
        JOIN  \`Character\` AS C ON C.Id = UC.CharacterId
        WHERE U.Id = ?`;
        let params = [`${UserByIdRequest.userId}`];
        let resp = yield (0, mysql_1.sqlQueryMaker)(query, params);
        return resp;
    }),
    addUser: (addUserRequestModel) => __awaiter(void 0, void 0, void 0, function* () {
        let query = 'INSERT INTO User ( UserName ) VALUES (?);';
        let params = [`${addUserRequestModel.userName}`];
        let resp = yield (0, mysql_1.sqlQueryMaker)(query, params);
        return resp;
    }),
    deleteUser: (deleteUserRequest) => __awaiter(void 0, void 0, void 0, function* () {
        let query = 'DELETE FROM User WHERE Id = ?;';
        let params = [deleteUserRequest.userId];
        let resp = yield (0, mysql_1.sqlQueryMaker)(query, params);
        return resp;
    })
};
exports.default = userDal;
