"use client";

import SquareIcon from "./Icons/SquareIcon";
import CheckedIcon from "./Icons/CheckedIcon";
import DeleteIcon from "./Icons/DeleteIcon";

const Todo = ({ title, id, done }) => {
  const changeStatus = async (id) => {
    await fetch(`http://localhost:3001/api/todo/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
    });
  };

  const deleteTodo = async (id) => {
    await fetch(`http://localhost:3001/api/todo/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
  };

  return (
    <div
      className={`flex items-center gap-2 bg-neutral-50 py-2 px-4 rounded-xl text-gray-600 cursor-pointer capitalize ${
        done ? "line-through" : ""
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
        <DeleteIcon />
      </button>
    </div>
  );
};

export default Todo;
