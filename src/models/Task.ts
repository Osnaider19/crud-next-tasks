import { Schema , model , models} from "mongoose";

const TaskScheme = new Schema(
  {
    title: {
      type: String,
      required: [true , "el titulo es requerido"],
      trim: true,
    },
    description: {
      type: String,
      required: [true , "la descripción es requirida"],
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

export  default models.task || model("task" , TaskScheme)
