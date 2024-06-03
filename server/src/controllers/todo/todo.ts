import { Request, Response } from "express";
import { todoValidationSchema } from "../../models/todo/validations";
import TodoModel from "../../models/todo/todo";

export const createTodo = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const validatedData = await todoValidationSchema.validate(req.body);
    const todo = new TodoModel(validatedData);
    await todo.save();
    res.status(201).json(todo);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};
