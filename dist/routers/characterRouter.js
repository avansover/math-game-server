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
const express_1 = require("express");
const characterBl_1 = require("../businessLogic/characterBl");
const router = (0, express_1.Router)();
router.route('/').get((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let resp = yield (0, characterBl_1.testBl)();
    return res.json(resp);
}));
router.route('/').post((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    return res.send("post");
}));
exports.default = router;
