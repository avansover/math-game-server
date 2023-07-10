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
const router = (0, express_1.Router)();
router.route('/get-users').get((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // var resp = await testBL()
    return res.json("get-users");
}));
router.route('/get-user-by-id').get((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.query);
    return res.json("get-user-by-id");
}));
router.route('/add-user').post((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    return res.send("add-user");
}));
router.route('/delete-user').delete((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    return res.send("delete-user");
}));
exports.default = router;
