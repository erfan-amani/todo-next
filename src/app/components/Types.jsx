import Link from "next/link";
import React from "react";

const TYPES = [
  { name: "All", value: "all" },
  { name: "Compeleted", value: "compeleted" },
  { name: "Uncompeleted", value: "uncompeleted" },
];

const TodoTypes = ({ active }) => {
  return (
    <div className="flex gap-4 justify-center flex-shrink-0">
      {TYPES.map((type) => (
        <Link
          href={`/?type=${type.value}`}
          key={type.value}
          className={`px-4 py-2 rounded-full capitalize ${
            active === type.value
              ? "bg-purple-400 dark:bg-purple-800 text-neutral-100 dark:text-neutral-200 font-bold shadow-sm"
              : "bg-gray-300 dark:bg-gray-700 text-gray-600 dark:text-neutral-400"
          }`}
        >
          {type.name}
        </Link>
      ))}
    </div>
  );
};

export default TodoTypes;
