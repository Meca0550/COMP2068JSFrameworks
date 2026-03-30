import { Request, Response } from "express";
import Meal from "../models/Meal";

// GET all meals
export const getMeals = async (req: Request, res: Response): Promise<void> => {
  try {
    const meals = await Meal.find().sort({ createdAt: -1 });
    res.status(200).json(meals);
  } catch (error) {
    res.status(500).json({ message: "Error fetching meals", error });
  }
};

// GET single meal by ID
export const getMealById = async (req: Request, res: Response): Promise<void> => {
  try {
    const meal = await Meal.findById(req.params.id);

    if (!meal) {
      res.status(404).json({ message: "Meal not found" });
      return;
    }

    res.status(200).json(meal);
  } catch (error) {
    res.status(500).json({ message: "Error fetching meal", error });
  }
};

// POST create new meal
export const createMeal = async (req: Request, res: Response): Promise<void> => {
  try {
    const newMeal = new Meal(req.body);
    const savedMeal = await newMeal.save();
    res.status(201).json(savedMeal);
  } catch (error) {
    res.status(400).json({ message: "Error creating meal", error });
  }
};

// PUT update meal
export const updateMeal = async (req: Request, res: Response): Promise<void> => {
  try {
    const updatedMeal = await Meal.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedMeal) {
      res.status(404).json({ message: "Meal not found" });
      return;
    }

    res.status(200).json(updatedMeal);
  } catch (error) {
    res.status(400).json({ message: "Error updating meal", error });
  }
};

// DELETE meal
export const deleteMeal = async (req: Request, res: Response): Promise<void> => {
  try {
    const deletedMeal = await Meal.findByIdAndDelete(req.params.id);

    if (!deletedMeal) {
      res.status(404).json({ message: "Meal not found" });
      return;
    }

    res.status(200).json({ message: "Meal deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting meal", error });
  }
};