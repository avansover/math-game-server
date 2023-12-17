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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const characterDAL_1 = __importDefault(require("../dataAccessLayer/characterDAL"));
const UserCharacterDal_1 = __importDefault(require("../dataAccessLayer/UserCharacterDal"));
const characterBl = {
    getCharacters: () => __awaiter(void 0, void 0, void 0, function* () {
        let resp = yield characterDAL_1.default.getCharacters();
        return resp;
    }),
    addCharacter: (addCharacterRequest) => __awaiter(void 0, void 0, void 0, function* () {
        const addCharacterResp = yield characterDAL_1.default.addCharacter(addCharacterRequest);
        const addUserCharacterRequest = {
            userId: addCharacterRequest.userId,
            characterId: addCharacterResp.insertId
        };
        const addUserCharacterResp = yield UserCharacterDal_1.default.addUserCharacter(addUserCharacterRequest);
        return addUserCharacterResp;
    }),
    deleteCharacter: (deleteCharacterRequest) => __awaiter(void 0, void 0, void 0, function* () {
        let resp = yield characterDAL_1.default.deleteCharacter(deleteCharacterRequest);
        return resp;
    })
};
exports.default = characterBl;
