import { NextFunction, Request, Response } from "express";
import User from "../../models/user/userModel";
import Inv from "../../models/inv/invModel";

export const registerUser = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const lastUser = await User.findOne().sort({ userId: -1 });
    const newUserId = lastUser ? lastUser.userId + 1 : 1;
    const user = new User({ ...req.body, userId: newUserId });
    await user.save();
    res.status(201).send(user);
  } catch (error: any) {
    console.error("Error:", error);
    next(error);
  }
};
export const postInv = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const lastUser = await Inv.findOne().sort({ invId: -1 });
    const newinvId = lastUser ? lastUser.invId + 1 : 1;
    const inv = new Inv({ ...req.body, invId: newinvId });
    await inv.save();
    res.status(201).send(inv);
  } catch (error: any) {
    console.error("Error:", error);
    next(error);
  }
};
export const getRegisterUser = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const user = await User.find();
    res.status(200).send(user);
  } catch (error: any) {
    console.error("Error:", error);
    next(error);
  }
};
export const updateRegisterUser = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).send(user);
  } catch (error: any) {
    console.error("Error:", error);
    next(error);
  }
};
export const deleteRegisterUser = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).send(user);
  } catch (error: any) {
    console.error("Error:", error);
    next(error);
  }
};
