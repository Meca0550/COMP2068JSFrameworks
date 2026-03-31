import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-green-700 text-white px-6 py-4">
      <div className="max-w-5xl mx-auto flex gap-6 font-medium">
        <Link href="/">Home</Link>
        <Link href="/meals">List Meals</Link>
        <Link href="/meals/add">Add Meal</Link>
      </div>
    </nav>
  );
}


