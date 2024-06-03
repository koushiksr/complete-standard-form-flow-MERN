import { Schema, Document, model } from "mongoose";

export interface Todo extends Document {
  text: string;
  completed: boolean;
}

export const todoSchema: Schema = new Schema({
  text: { type: String, required: true },
  completed: { type: Boolean, default: false },
});

export default model<Todo>("Todo", todoSchema);
