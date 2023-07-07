"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const NewTodo = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const session = useSession();
  const isAuthLoading = session.status === "loading";
  const isAuth = session.status === "authenticated";

  const onSubmit = async (event) => {
    event.preventDefault();

    const todo = event.target.todo.value;

    if (!todo) return;

    setLoading(true);

    await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/todo`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: todo, user: session.data.user._id }),
    });

    router.refresh();
    setLoading(false);
    event.target.todo.value = "";
  };

  const isLoading = loading || isAuthLoading;

  return (
    <div className="flex-shrink-0">
      {isLoading ? (
        <div className="animate-pulse flex items-center justify-center cursor-default mt-2 w-full h-11 rounded-md bg-neutral-50 dark:bg-gray-700">
          <span className="opacity-40 m-auto">Please wait...</span>
        </div>
      ) : isAuth ? (
        <form
          onSubmit={onSubmit}
          className="relative flex bg-neutral-50 dark:bg-gray-700 px-4 py-2 rounded-xl w-full shadow-sm"
        >
          <input
            type="text"
            name="todo"
            className="flex-grow text-gray-700 dark:text-gray-100 outline-none pr-4 w-full bg-transparent"
            placeholder="Write here!"
          />
          <button
            type="submit"
            className="bg-gray-300 py-1.5 px-3 rounded-xl text-gray-700 dark:text-neutral-50 dark:bg-gray-600 hover:bg-blue-200 active:ring-blue-4 font-medium"
          >
            Add
          </button>
        </form>
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
