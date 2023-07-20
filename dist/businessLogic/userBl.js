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
const userDal_1 = __importDefault(require("../dataAccessLayer/userDal"));
const userBl = {
    getUsers: () => __awaiter(void 0, void 0, void 0, function* () {
        let resp = yield userDal_1.default.getUser();
        return resp;
    }),
    getUsersById: (UserByIdRequest) => __awaiter(void 0, void 0, void 0, function* () {
        let UserCharacters = yield userDal_1.default.getUserById(UserByIdRequest);
        const nestedResult = UserCharacters.reduce((acc, obj) => {
            const user = acc.find((userObj) => userObj.userId === obj.UserId);
            if (!user) {
                acc.push({
                    userId: obj.UserId,
                    UserName: obj.UserName,
                    Password: obj.Password,
                    Characters: [{ CharacterId: obj.CharacterId, Name: obj.Name }]
                });
            }
            else {
                user.Characters.push({ CharacterId: obj.CharacterId, Name: obj.Name });
            }
            return acc;
        }, []);
        return nestedResult;
    }),
    addUser: (addUserRequest) => __awaiter(void 0, void 0, void 0, function* () {
        let resp = yield userDal_1.default.addUser(addUserRequest);
        return resp;
    }),
    deleteUser: (deleteUserRequest) => __awaiter(void 0, void 0, void 0, function* () {
        let resp = yield userDal_1.default.deleteUser(deleteUserRequest);
        return resp;
    })
};
exports.default = userBl;
