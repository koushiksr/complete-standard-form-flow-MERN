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
exports.deleteRights = exports.updateRights = exports.getRights = exports.populateRights = exports.createRights = void 0;
const rights_1 = __importDefault(require("../../models/rights/rights"));
// Register a new Rights member
const createRights = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const right = new rights_1.default(Object.assign({}, req.body));
        yield right.save();
        res.status(201).send(right);
    }
    catch (error) {
        next(error);
    }
});
exports.createRights = createRights;
const populateRights = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const right = yield rights_1.default.find({ _id: req.body.right_id }).populate("staff_id");
        res.status(200).send(right);
    }
    catch (error) {
        next(error);
    }
});
exports.populateRights = populateRights;
// Get all Rights members
const getRights = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const right = yield rights_1.default.find();
        res.status(200).send(right);
    }
    catch (error) {
        console.error("Error:", error);
        next(error);
    }
});
exports.getRights = getRights;
// Update a Rights member by ID
const updateRights = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const right = yield rights_1.default.findByIdAndUpdate(id, req.body, {
            new: true,
        });
        if (!right) {
            res.status(404).send({ message: "Rights  not found" });
        }
        else {
            res.status(200).send(right);
        }
    }
    catch (error) {
        console.error("Error:", error);
        next(error);
    }
});
exports.updateRights = updateRights;
// Delete a Rights member by ID
const deleteRights = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const deletedright = yield rights_1.default.findByIdAndDelete(id);
        if (!deletedright) {
            res.status(404).send({ message: "right  not found" });
        }
        else {
            res.status(200).send({ message: "right  deleted successfully" });
        }
    }
    catch (error) {
        console.error("Error:", error);
        next(error);
    }
});
exports.deleteRights = deleteRights;
