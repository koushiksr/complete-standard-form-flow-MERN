import { RequestHandler } from "../../utils/expressRequestHandler";
import Staff from "../../models/staff/staff";

// Register a new staff member
export const createStaff: RequestHandler = async (req, res, next) => {
  try {
    const staff = new Staff({ ...req.body });
    await staff.save();
    res.status(201).send(staff);
  } catch (error: any) {
    next(error);
  }
};
export const populateStaff: RequestHandler = async (req, res, next) => {
  try {
    const staff = await Staff.find({ _id: req.body.staff_id }).populate(
      "Rights"
    );
    res.status(200).send(staff);
  } catch (error: any) {
    next(error);
  }
};

// Get all staff members
export const getStaff: RequestHandler = async (req, res, next) => {
  try {
    const staff = await Staff.find();
    res.status(200).send(staff);
  } catch (error: any) {
    console.error("Error:", error);
    next(error);
  }
};

// Update a staff member by ID
export const updateStaff: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedStaff = await Staff.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedStaff) {
      res.status(404).send({ message: "Staff member not found" });
    } else {
      res.status(200).send(updatedStaff);
    }
  } catch (error: any) {
    console.error("Error:", error);
    next(error);
  }
};

// Delete a staff member by ID
export const deleteStaff: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedStaff = await Staff.findByIdAndDelete(id);
    if (!deletedStaff) {
      res.status(404).send({ message: "Staff member not found" });
    } else {
      res.status(200).send({ message: "Staff member deleted successfully" });
    }
  } catch (error: any) {
    console.error("Error:", error);
    next(error);
  }
};
