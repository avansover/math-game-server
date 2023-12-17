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
const classBl_1 = __importDefault(require("../businessLogic/classBl"));
const router = (0, express_1.Router)();
router.route('/get-classes').get((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let resp = yield classBl_1.default.getClasses();
        return res.json(resp);
    }
    catch (error) {
        return res.json(error);
    }
}));
router.route('/add-class').post((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const addClassCommand = req.body;
        let resp = yield classBl_1.default.addClass(addClassCommand);
        return res.json(resp);
    }
    catch (error) {
        return res.json(error);
    }
}));
router.route('/delete-class').delete((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.query;
        const deleteClassCommand = { id: Number(id) };
        let resp = yield classBl_1.default.deleteClass(deleteClassCommand);
        return res.json(resp);
    }
    catch (error) {
        return res.json(error);
    }
}));
exports.default = router;
