import express from "express";
import {
  registerUser,
  getRegisterUser,
  updateRegisterUser,
  deleteRegisterUser,
  postInv,
} from "../../controllers/user/userController";

const router = express.Router();

router.post("/register", registerUser);
router.post("/inv", postInv);
router.get("/register", getRegisterUser);
router.put("/register", updateRegisterUser);
router.delete("/register", deleteRegisterUser);

export default router;
