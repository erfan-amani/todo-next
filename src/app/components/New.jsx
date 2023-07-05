"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";

const NewTodo = () => {
  const session = useSession();
  const isAuthLoading = session.status === "loading";
  const isAuth = session.status === "authenticated";

  const onSubmit = async (event) => {
    event.preventDefault();

    const todo = event.target.todo.value;

    if (!todo) return;

    await fetch("http://localhost:3001/api/todo", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: todo, user: session.data.user._id }),
    });

    event.target.todo.value = "";
  };

  return (
    <div className="flex-shrink-0">
      {isAuth ? (
        <form
          onSubmit={onSubmit}
          className="relative flex bg-white px-4 py-2 rounded-xl w-full shadow-sm"
        >
          <input
            type="text"
            name="todo"
            className="flex-grow text-gray-700 outline-none pr-4 w-full"
            placeholder="Write here!"
          />
          <button
            type="submit"
            className="bg-gray-300 py-1.5 px-3 rounded-xl text-gray-700 hover:bg-blue-200 active:ring-blue-4 font-medium"
          >
            Add
          </button>
        </form>
      ) : isAuthLoading ? (
        <button
          disabled
          className="w-full text-center bg-gray-300 py-2 px-3 rounded-xl text-gray-700 hover:bg-blue-200 active:ring-blue-4 font-medium"
        >
          Please wait!
        </button>
      ) : (
        <Link
          href="/auth"
          className="w-full text-center bg-gray-300 py-2 px-3 rounded-xl text-gray-700 hover:bg-blue-200 active:ring-blue-4 font-medium"
        >
          Login
        </Link>
      )}
    </div>
  );
};

export default NewTodo;