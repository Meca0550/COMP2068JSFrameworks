"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getMeals, deleteMeal } from "../../lib/api";

type Ingredient = {
  name: string;
  quantity: string;
};

type Meal = {
  _id: string;
  name: string;
  category: string;
  day: string;
  calories: number;
  instructions: string;
  ingredients: Ingredient[];
};

export default function MealsPage() {
  const [meals, setMeals] = useState<Meal[]>([]);

  const loadMeals = async () => {
  try {
    const data = await getMeals();
    console.log("Meals from API:", data);
    setMeals(data);
    } catch (error) {
    console.error("Error loading meals:", error);
    }
    };

  const handleDelete = async (id: string) => {
    await deleteMeal(id);
    loadMeals();
  };

  useEffect(() => {
    loadMeals();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-green-800">All Meals</h1>

      <div className="grid gap-4">
        {meals.map((meal) => (
          <div key={meal._id} className="border rounded-lg p-4 shadow-sm bg-white">
            <h2 className="text-xl font-semibold">{meal.name}</h2>
            <p className="mt-1">
              {meal.category} | {meal.day}
            </p>
            <p>{meal.calories} calories</p>
            <p>{meal.ingredients.length} ingredients</p>

            <div className="mt-4 flex gap-3">
              <Link
                href={`/meals/edit/${meal._id}`}
                className="bg-yellow-500 text-white px-4 py-2 rounded"
              >
                Edit
              </Link>

              <button
                onClick={() => handleDelete(meal._id)}
                className="bg-red-600 text-white px-4 py-2 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}