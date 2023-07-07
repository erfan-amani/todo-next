"use client";

import EyeClosed from "@/app/components/Icons/EyeClosed";
import EyeOpen from "@/app/components/Icons/EyeOpen";
import React, { useState } from "react";

const AuthInput = ({ label, type = "text", name }) => {
  const [hide, setHide] = useState(true);

  return (
    <div className="flex flex-col gap-1 w-full">
      {!!label && <label htmlFor={name}>{label}</label>}
      <div className="relative">
        <input
          type={type === "password" ? (hide ? "password" : "text") : type}
          name={name}
          autoComplete="off"
          className="w-full bg-transparent py-2 px-3 rounded-md border-2 border-neutral-400 focus-visible:outline-none"
        />

        {type === "password" && (
          <button
            className="absolute right-2 top-1/2 -translate-y-1/2"
            type="button"
            onClick={() => setHide((prev) => !prev)}
          >
            {hide ? (
              <EyeClosed className="fill-gray-600 dark:fill-gray-300" />
            ) : (
              <EyeOpen className="fill-gray-600 dark:fill-gray-300" />
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export default AuthInput;
