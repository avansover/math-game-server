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
const characterBL_1 = __importDefault(require("../businessLogic/characterBL"));
const router = (0, express_1.Router)();
router.route('/get-characters').get((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let resp = yield characterBL_1.default.getCharacters();
    return res.json(resp);
}));
router.route('/add-character').post((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const addCharacterRequest = req.body;
    let resp = yield characterBL_1.default.addCharacter(addCharacterRequest);
    return res.json(resp);
    ;
}));
router.route('/delete-character').delete((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { characterId } = req.query;
        const deleteUserRequest = { characterId: Number(characterId) };
        const resp = yield characterBL_1.default.deleteCharacter(deleteUserRequest);
        return res.json(resp);
    }
    catch (error) {
        console.log(error);
        return res.json(error);
    }
}));
exports.default = router;
