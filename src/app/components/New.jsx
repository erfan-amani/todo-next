"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const NewTodo = () => {
  const router = useRouter();
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

    router.refresh();

    event.target.todo.value = "";
  };

  return (
    <div className="flex-shrink-0">
      {isAuth ? (
        <form
          onSubmit={onSubmit}
          className="relative flex bg-neutral-50 dark:bg-gray-600 px-4 py-2 rounded-xl w-full shadow-sm"
        >
          <input
            type="text"
            name="todo"
            className="flex-grow text-gray-700 dark:text-gray-100 outline-none pr-4 w-full bg-transparent"
            placeholder="Write here!"
          />
          <button
            type="submit"
            className="bg-gray-300 py-1.5 px-3 rounded-xl text-gray-700 dark:text-neutral-50 dark:bg-gray-500 hover:bg-blue-200 active:ring-blue-4 font-medium"
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
          className="block w-full text-center bg-gray-300 dark:bg-gray-700 py-2 px-3 rounded-xl text-neutral-700 dark:text-neutral-50 hover:bg-blue-200 active:ring-blue-4 font-medium"
        >
          Login
        </Link>
      )}
    </div>
  );
};

export default NewTodo;
