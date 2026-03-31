"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createMeal } from "../../../lib/api";

type Ingredient = {
  name: string;
  quantity: string;
};

export default function AddMealPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    category: "Breakfast",
    day: "Monday",
    calories: "",
    instructions: "",
    ingredients: [{ name: "", quantity: "" }] as Ingredient[],
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleIngredientChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const updatedIngredients = [...formData.ingredients];
    updatedIngredients[index][e.target.name as keyof Ingredient] = e.target.value;
    setFormData({ ...formData, ingredients: updatedIngredients });
  };

  const addIngredientField = () => {
    setFormData({
      ...formData,
      ingredients: [...formData.ingredients, { name: "", quantity: "" }],
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await createMeal({
      ...formData,
      calories: Number(formData.calories),
    });

    router.push("/meals");
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-green-800">Add Meal</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          placeholder="Meal Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />

        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        >
          <option>Breakfast</option>
          <option>Lunch</option>
          <option>Dinner</option>
          <option>Snack</option>
        </select>

        <select
          name="day"
          value={formData.day}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        >
          <option>Monday</option>
          <option>Tuesday</option>
          <option>Wednesday</option>
          <option>Thursday</option>
          <option>Friday</option>
          <option>Saturday</option>
          <option>Sunday</option>
        </select>

        <input
          name="calories"
          type="number"
          placeholder="Calories"
          value={formData.calories}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />

        <textarea
          name="instructions"
          placeholder="Instructions"
          value={formData.instructions}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />

        <h2 className="text-xl font-semibold">Ingredients</h2>

        {formData.ingredients.map((ingredient, index) => (
          <div key={index} className="grid grid-cols-2 gap-4">
            <input
              name="name"
              placeholder="Ingredient Name"
              value={ingredient.name}
              onChange={(e) => handleIngredientChange(index, e)}
              className="border p-2 rounded"
              required
            />
            <input
              name="quantity"
              placeholder="Quantity"
              value={ingredient.quantity}
              onChange={(e) => handleIngredientChange(index, e)}
              className="border p-2 rounded"
              required
            />
          </div>
        ))}

        <button
          type="button"
          onClick={addIngredientField}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Add Another Ingredient
        </button>

        <button
          type="submit"
          className="block bg-green-700 text-white px-6 py-2 rounded"
        >
          Create Meal
        </button>
      </form>
    </div>
  );
}