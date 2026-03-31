const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const getMeals = async () => {
  const res = await fetch(`${BASE_URL}/meals`, {
    cache: "no-store",
  });
  return res.json();
};

export const getMealById = async (id: string) => {
  const res = await fetch(`${BASE_URL}/meals/${id}`, {
    cache: "no-store",
  });
  return res.json();
};

export const createMeal = async (mealData: any) => {
  const res = await fetch(`${BASE_URL}/meals`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(mealData),
  });
  return res.json();
};

export const updateMeal = async (id: string, mealData: any) => {
  const res = await fetch(`${BASE_URL}/meals/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(mealData),
  });
  return res.json();
};

export const deleteMeal = async (id: string) => {
  const res = await fetch(`${BASE_URL}/meals/${id}`, {
    method: "DELETE",
  });
  return res.json();
};
