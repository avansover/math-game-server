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
const characterDal = {
    getCharacters: () => __awaiter(void 0, void 0, void 0, function* () {
        let query = "SELECT * FROM `Character`";
        let resp = yield (0, mysql_1.sqlQueryMaker)(query);
        return resp;
    }),
    addCharacter: (addCharacterRequest) => __awaiter(void 0, void 0, void 0, function* () {
        const query = `
         INSERT INTO \`Character\` (Name, ClassId)
         VALUES (?, ?);
        `;
        let params = [addCharacterRequest.name, addCharacterRequest.classId];
        let resp = yield (0, mysql_1.sqlQueryMaker)(query, params);
        console.log(resp);
        return resp;
    }),
    deleteCharacter: (deleteCharacterRequest) => __awaiter(void 0, void 0, void 0, function* () {
        let query = 'DELETE FROM `Character` WHERE Id = ?;';
        let params = [deleteCharacterRequest.characterId];
        let resp = yield (0, mysql_1.sqlQueryMaker)(query, params);
        return resp;
    })
};
exports.default = characterDal;
