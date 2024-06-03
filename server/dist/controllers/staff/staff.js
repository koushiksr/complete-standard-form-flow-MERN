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
exports.deleteStaff = exports.updateStaff = exports.getStaff = exports.populateStaff = exports.createStaff = void 0;
const staff_1 = __importDefault(require("../../models/staff/staff"));
// Register a new staff member
const createStaff = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const staff = new staff_1.default(Object.assign({}, req.body));
        yield staff.save();
        res.status(201).send(staff);
    }
    catch (error) {
        next(error);
    }
});
exports.createStaff = createStaff;
const populateStaff = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const staff = yield staff_1.default.find({ _id: req.body.staff_id }).populate("Rights");
        res.status(200).send(staff);
    }
    catch (error) {
        next(error);
    }
});
exports.populateStaff = populateStaff;
// Get all staff members
const getStaff = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const staff = yield staff_1.default.find();
        res.status(200).send(staff);
    }
    catch (error) {
        console.error("Error:", error);
        next(error);
    }
});
exports.getStaff = getStaff;
// Update a staff member by ID
const updateStaff = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const updatedStaff = yield staff_1.default.findByIdAndUpdate(id, req.body, {
            new: true,
        });
        if (!updatedStaff) {
            res.status(404).send({ message: "Staff member not found" });
        }
        else {
            res.status(200).send(updatedStaff);
        }
    }
    catch (error) {
        console.error("Error:", error);
        next(error);
    }
});
exports.updateStaff = updateStaff;
// Delete a staff member by ID
const deleteStaff = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const deletedStaff = yield staff_1.default.findByIdAndDelete(id);
        if (!deletedStaff) {
            res.status(404).send({ message: "Staff member not found" });
        }
        else {
            res.status(200).send({ message: "Staff member deleted successfully" });
        }
    }
    catch (error) {
        console.error("Error:", error);
        next(error);
    }
});
exports.deleteStaff = deleteStaff;
