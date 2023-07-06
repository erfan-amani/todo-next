import React from "react";

const TodoTypes = () => {
  const isActive = false;
  return (
    <div className="flex gap-4 justify-center flex-shrink-0">
      <button
        className={`px-4 py-2 rounded-full capitalize ${
          isActive
            ? " bg-purple-400 shadow-sm text-neutral-100 dark:text-neutral-800 font-bold"
            : "bg-gray-300 dark:bg-gray-700 text-gray-600 dark:text-neutral-400"
        }`}
      >
        All
      </button>{" "}
      <button
        className={`px-4 py-2 rounded-full capitalize ${
          isActive
            ? " bg-purple-400 shadow-sm text-neutral-100 dark:text-neutral-800 font-bold"
            : "bg-gray-300 dark:bg-gray-700 text-gray-600 dark:text-neutral-400"
        }`}
      >
        Compeleted
      </button>{" "}
      <button
        className={`px-4 py-2 rounded-full capitalize ${
          isActive
            ? " bg-purple-400 shadow-sm text-neutral-100 dark:text-neutral-800 font-bold"
            : "bg-gray-300 dark:bg-gray-700 text-gray-600 dark:text-neutral-400"
        }`}
      >
        Uncompeleted
      </button>
    </div>
  );
};

export default TodoTypes;
