import React from "react";

const TodoTypes = () => {
  const isActive = false;
  return (
    <div className="flex gap-4 justify-center">
      <button
        className={`px-4 py-2 rounded-full capitalize ${
          isActive
            ? " bg-purple-400 shadow-sm text-gray-100 font-bold"
            : "bg-gray-300 text-gray-600"
        }`}
      >
        All
      </button>{" "}
      <button
        className={`px-4 py-2 rounded-full capitalize ${
          isActive
            ? " bg-purple-400 shadow-sm text-gray-100 font-bold"
            : "bg-gray-300 text-gray-600"
        }`}
      >
        Compeleted
      </button>{" "}
      <button
        className={`px-4 py-2 rounded-full capitalize ${
          isActive
            ? " bg-purple-400 shadow-sm text-gray-100 font-bold"
            : "bg-gray-300 text-gray-600"
        }`}
      >
        Uncompeleted
      </button>
    </div>
  );
};

export default TodoTypes;
