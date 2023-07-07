"use client";

import React from "react";
import ErrorIcon from "./components/Icons/ErrorIcon";

const Error = ({ error, reset }) => {
  return (
    <div className="my-auto flex flex-col items-center justify-center gap-8">
      <ErrorIcon
        className="fill-gray-600 dark:fill-gray-50"
        width="40"
        height="40"
      />

      <div className="flex flex-col items-center justify-center gap-1">
        <h3 className="text-lg">Something went wrong!</h3>
        <pd className="text-red-400 dark:text-red-200">
          {error.message || error}
        </pd>
      </div>

      <button onClick={reset} className="underline">
        Try again
      </button>
    </div>
  );
};

export default Error;
