import mongoose, { Schema, Document, Model } from "mongoose";

export interface IRights extends Document {
  staff_id: mongoose.Schema.Types.ObjectId;
  right: string;
  createdAt: Date;
  updatedAt: Date;
}

const rightsSchema: Schema<IRights> = new Schema(
  {
    staff_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Staff",
    },
    right: { type: String, required: [true, "Right is required"] },
  },
  { timestamps: true }
);

const Rights: Model<IRights> = mongoose.model<IRights>("Rights", rightsSchema);

export default Rights;
