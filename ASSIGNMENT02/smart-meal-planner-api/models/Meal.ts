import mongoose, { Schema, Document } from "mongoose";

interface IIngredient {
  name: string;
  quantity: string;
}

export interface IMeal extends Document {
  name: string;
  category: "Breakfast" | "Lunch" | "Dinner" | "Snack";
  day: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday";
  calories: number;
  instructions: string;
  ingredients: IIngredient[];
}

const ingredientSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  quantity: {
    type: String,
    required: true,
    trim: true,
  },
});

const mealSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      required: true,
      enum: ["Breakfast", "Lunch", "Dinner", "Snack"],
    },
    day: {
      type: String,
      required: true,
      enum: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
    },
    calories: {
      type: Number,
      required: true,
    },
    instructions: {
      type: String,
      required: true,
      trim: true,
    },
    ingredients: [ingredientSchema],
  },
  {
    timestamps: true,
  }
);

const Meal = mongoose.model<IMeal>("Meal", mealSchema);

export default Meal;