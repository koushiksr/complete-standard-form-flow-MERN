// src/types/expressHandlers.ts
import { NextFunction, Request, Response } from "express";

// Define a type alias for the handler function
export type RequestHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<void>;
