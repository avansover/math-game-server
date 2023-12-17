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
const classDal = {
    getClasses: () => __awaiter(void 0, void 0, void 0, function* () {
        let query = "SELECT * FROM Class";
        let resp = yield (0, mysql_1.sqlQueryMaker)(query);
        return resp;
    }),
    addClass: (addClassCommand) => __awaiter(void 0, void 0, void 0, function* () {
        let query = 'INSERT INTO Class ( ClassName, Life ) VALUES (?, ?);';
        let params = [addClassCommand.className, addClassCommand.life];
        let resp = yield (0, mysql_1.sqlQueryMaker)(query, params);
        return resp;
    }),
    deleteClass: (deleteClassCommand) => __awaiter(void 0, void 0, void 0, function* () {
        let query = 'DELETE FROM Class WHERE Id = ?;';
        let params = [deleteClassCommand.id];
        let resp = yield (0, mysql_1.sqlQueryMaker)(query, params);
        return resp;
    })
};
exports.default = classDal;
