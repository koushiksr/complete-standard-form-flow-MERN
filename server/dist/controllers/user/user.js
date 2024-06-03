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
exports.deleteRegisterUser = exports.updateRegisterUser = exports.getRegisterUser = exports.postInv = exports.registerUser = void 0;
const user_1 = __importDefault(require("../../models/user/user"));
const invoice_1 = __importDefault(require("../../models/invoice/invoice"));
// import { usersInterface } from "../../models/user/userInterface";
const registerUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const lastUser = yield user_1.default.findOne().sort({
            userId: -1,
        });
        const newUserId = lastUser ? lastUser.userId + 1 : 1;
        const user = new user_1.default(Object.assign(Object.assign({}, req.body), { userId: newUserId }));
        yield user.save();
        res.status(201).send(user);
    }
    catch (error) {
        next(error);
    }
});
exports.registerUser = registerUser;
const postInv = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const lastUser = yield invoice_1.default.findOne().sort({ invId: -1 });
        const newinvId = lastUser ? lastUser.invId + 1 : 1;
        const inv = new invoice_1.default(Object.assign(Object.assign({}, req.body), { invId: newinvId }));
        yield inv.save();
        res.status(201).send(inv);
    }
    catch (error) {
        console.error("Error:", error);
        next(error);
    }
});
exports.postInv = postInv;
const getRegisterUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield user_1.default.find();
        res.status(200).send(user);
    }
    catch (error) {
        console.error("Error:", error);
        next(error);
    }
});
exports.getRegisterUser = getRegisterUser;
const updateRegisterUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = new user_1.default(req.body);
        yield user.save();
        res.status(201).send(user);
    }
    catch (error) {
        console.error("Error:", error);
        next(error);
    }
});
exports.updateRegisterUser = updateRegisterUser;
const deleteRegisterUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = new user_1.default(req.body);
        yield user.save();
        res.status(201).send(user);
    }
    catch (error) {
        console.error("Error:", error);
        next(error);
    }
});
exports.deleteRegisterUser = deleteRegisterUser;
