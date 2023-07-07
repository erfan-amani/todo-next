"use client";

import SquareIcon from "./Icons/SquareIcon";
import CheckedIcon from "./Icons/CheckedIcon";
import DeleteIcon from "./Icons/DeleteIcon";
import { useRouter } from "next/navigation";

const Todo = ({ title, id, done }) => {
  const router = useRouter();

  const changeStatus = async (id) => {
    await fetch(`${process.env.BASE_URL}/api/todo/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
    });

    router.refresh();
  };

  const deleteTodo = async (id) => {
    await fetch(`${process.env.BASE_URL}/api/todo/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });

    router.refresh();
  };

  return (
    <div
      className={`flex items-center gap-4 bg-neutral-50 dark:bg-gray-700 py-2 px-4 rounded-xl capitalize ${
        done
          ? "text-gray-400 dark:text-neutral-500 line-through"
          : "text-gray-600 dark:text-neutral-300"
      }`}
    >
      <button
        onClick={() => changeStatus(id)}
        className="flex items-center gap-2 flex-grow"
      >
        <span>
          {done && <CheckedIcon />}
          {!done && <SquareIcon />}
        </span>
        <span>{title}</span>
      </button>
      <button onClick={() => deleteTodo(id)}>
        <DeleteIcon className="h-5 w-5 text-gray-500 dark:text-gray-400 hover:text-indigo-600 transition-colors duration-300" />
      </button>
    </div>
  );
};

export default Todo;
