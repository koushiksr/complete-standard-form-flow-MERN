import express from "express";
import {
  createStaff,
  populateStaff,
  getStaff,
  updateStaff,
  deleteStaff,
} from "../controllers/staff/staff";

const router = express.Router();

router.post("/", createStaff);
router.post("/populate", populateStaff);
router.get("/", getStaff);
router.put("/:id", updateStaff);
router.delete("/:id", deleteStaff);

export default router;
