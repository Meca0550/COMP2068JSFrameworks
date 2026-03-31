"use client";

import { use, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getMealById, updateMeal } from "../../../../lib/api";

type Ingredient = {
  name: string;
  quantity: string;
};

type MealForm = {
  name: string;
  category: string;
  day: string;
  calories: string | number;
  instructions: string;
  ingredients: Ingredient[];
};

export default function EditMealPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const router = useRouter();
  const { id } = use(params);

  const [formData, setFormData] = useState<MealForm>({
    name: "",
    category: "Breakfast",
    day: "Monday",
    calories: "",
    instructions: "",
    ingredients: [{ name: "", quantity: "" }],
  });

  useEffect(() => {
    const loadMeal = async () => {
      const data = await getMealById(id);
      setFormData(data);
    };

    loadMeal();
  }, [id]);

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

    await updateMeal(id, {
      ...formData,
      calories: Number(formData.calories),
    });

    router.push("/meals");
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-green-800">Edit Meal</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
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
          value={formData.calories}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />

        <textarea
          name="instructions"
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
              value={ingredient.name}
              onChange={(e) => handleIngredientChange(index, e)}
              className="border p-2 rounded"
              required
            />
            <input
              name="quantity"
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
          Save Changes
        </button>
      </form>
    </div>
  );
}