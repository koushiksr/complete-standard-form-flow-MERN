import { RequestHandler } from "../../utils/expressRequestHandler";
import Rights from "../../models/rights/rights";

// Register a new Rights member
export const createRights: RequestHandler = async (req, res, next) => {
  try {
    const right = new Rights({ ...req.body });
    await right.save();
    res.status(201).send(right);
  } catch (error: any) {
    next(error);
  }
};

export const populateRights: RequestHandler = async (req, res, next) => {
  try {
    const right = await Rights.find({ _id: req.body.right_id }).populate(
      "staff_id"
    );
    res.status(200).send(right);
  } catch (error: any) {
    next(error);
  }
};

// Get all Rights members
export const getRights: RequestHandler = async (req, res, next) => {
  try {
    const right = await Rights.find();
    res.status(200).send(right);
  } catch (error: any) {
    console.error("Error:", error);
    next(error);
  }
};

// Update a Rights member by ID
export const updateRights: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const right = await Rights.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!right) {
      res.status(404).send({ message: "Rights  not found" });
    } else {
      res.status(200).send(right);
    }
  } catch (error: any) {
    console.error("Error:", error);
    next(error);
  }
};

// Delete a Rights member by ID
export const deleteRights: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedright = await Rights.findByIdAndDelete(id);
    if (!deletedright) {
      res.status(404).send({ message: "right  not found" });
    } else {
      res.status(200).send({ message: "right  deleted successfully" });
    }
  } catch (error: any) {
    console.error("Error:", error);
    next(error);
  }
};
