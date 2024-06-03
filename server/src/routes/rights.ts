import express from "express";
import {
  createRights,
  getRights,
  updateRights,
  deleteRights,
  populateRights,
} from "../controllers/rights/rights";

const router = express.Router();

router.post("/", createRights);
router.post("/populate", populateRights);
router.get("/", getRights);
router.put("/:id", updateRights);
router.delete("/:id", deleteRights);

export default router;
