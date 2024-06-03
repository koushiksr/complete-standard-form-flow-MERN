import mongoose, { Schema, Document, Model } from "mongoose";

export interface IStaff extends Document {
  name: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

const staffSchema: Schema<IStaff> = new Schema(
  {
    name: { type: String, required: [true, "Name is required"] },
    email: {
      type: String,
      required: [true, "Email is required"],
      match: [/\S+@\S+\.\S+/, "Email is not valid"],
    },
  },
  { timestamps: true }
);

const Staff: Model<IStaff> = mongoose.model<IStaff>("Staff", staffSchema);

export default Staff;
