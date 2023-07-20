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
const express_1 = require("express");
const UserCharacterBl_1 = __importDefault(require("../businessLogic/UserCharacterBl"));
const router = (0, express_1.Router)();
router.route('/get-all-users-characters').get((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const resp = yield UserCharacterBl_1.default.getUserCharacters();
    return res.json(resp);
}));
router.route('/delete-user-character').delete((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userCharacterId } = req.query;
        const deleteUserCharacterRequest = { userCharacterId: Number(userCharacterId) };
        const resp = yield UserCharacterBl_1.default.deleteUserCharacter(deleteUserCharacterRequest);
        return res.json(resp);
    }
    catch (error) {
        return res.json(error);
    }
}));
exports.default = router;
