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
const UserCharacterDal = {
    getUserCharacters: () => __awaiter(void 0, void 0, void 0, function* () {
        let query = "SELECT * FROM UserCharacter";
        let resp = yield (0, mysql_1.sqlQueryMaker)(query);
        return resp;
    }),
    addUserCharacter: (addUserCharacterRequest) => __awaiter(void 0, void 0, void 0, function* () {
        const query = `
        INSERT INTO \`UserCharacter\` ( UserId, CharacterId )
        VALUES (?, ?);
        `;
        let params = [addUserCharacterRequest.userId, addUserCharacterRequest.characterId];
        let resp = yield (0, mysql_1.sqlQueryMaker)(query, params);
        console.log(resp);
        return resp;
    }),
    deleteUserCharacter: (deleteUserCharacterRequest) => __awaiter(void 0, void 0, void 0, function* () {
        let query = 'DELETE FROM UserCharacter WHERE Id = ?;';
        let params = [deleteUserCharacterRequest.userCharacterId];
        let resp = yield (0, mysql_1.sqlQueryMaker)(query, params);
        return resp;
    })
};
exports.default = UserCharacterDal;
