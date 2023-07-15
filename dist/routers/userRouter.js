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
const userBl_1 = __importDefault(require("../businessLogic/userBl"));
const router = (0, express_1.Router)();
router.route('/get-users').get((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let resp = yield userBl_1.default.getUsers();
    return res.json(resp);
}));
router.route('/get-user-by-id').get((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return res.json("get-user-by-id");
}));
router.route('/add-user').post((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const addUserRequest = req.body;
        const resp = yield userBl_1.default.addUser(addUserRequest);
        return res.send(resp);
    }
    catch (error) {
        return error;
    }
}));
router.route('/delete-user').delete((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = req.query;
        //const test: UserCommandModel.DeleteUserById = req.query;
        const deleteUserRequest = { userId: Number(userId) };
        const resp = yield userBl_1.default.deleteUser(deleteUserRequest);
        return res.json(resp);
    }
    catch (error) {
        console.log(error);
        return res.json(error);
    }
}));
exports.default = router;
