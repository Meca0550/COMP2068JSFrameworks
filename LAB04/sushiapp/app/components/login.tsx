"use client";

export default function Login() {
  return (
    <main>
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <form className="bg-white p-8 rounded-lg shadow-lg w-80">

            <h1 className="text-2xl font-semibold text-center mb-6 text-gray-800">
            Login
            </h1>

            <input
            type="email"
            placeholder="Enter your email"
            className="w-full mb-4 p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />

            <input
            type="password"
            placeholder="Enter your password"
            className="w-full mb-5 p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />

            <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition"
            >
            Login
            </button>

        </form>
        </div>
    </main>
  );
}
