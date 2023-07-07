import React from "react";

const Loading = () => {
  return (
    <div className="flex flex-col gap-6 h-full">
      <div className="flex justify-between flex-shrink-0">
        <div className="w-28 h-7 rounded-lg bg-neutral-50 dark:bg-gray-700" />

        <div className="flex gap-2">
          <div className="w-7 h-7 rounded-full bg-neutral-50 dark:bg-gray-700" />
          <div className="w-7 h-7 rounded-full bg-neutral-50 dark:bg-gray-700" />
        </div>
      </div>

      <div className="flex items-center justify-center gap-3 flex-shrink-0">
        <div className="w-32 h-9 rounded-full bg-neutral-50 dark:bg-gray-700" />
        <div className="w-32 h-9 rounded-full bg-neutral-50 dark:bg-gray-700" />
        <div className="w-32 h-9 rounded-full bg-neutral-50 dark:bg-gray-700" />
      </div>

      <div className="w-full flex flex-col gap-4 animate-pulse flex-1">
        <div className="w-full h-9 rounded-lg bg-neutral-50 dark:bg-gray-700" />
        <div className="w-full h-9 rounded-lg bg-neutral-50 dark:bg-gray-700" />
        <div className="w-full h-9 rounded-lg bg-neutral-50 dark:bg-gray-700" />
        <div className="w-full h-9 rounded-lg bg-neutral-50 dark:bg-gray-700" />
      </div>

      <div className="flex-shrink-0">
        <div className="w-full h-12 rounded-xl bg-neutral-50 dark:bg-gray-700" />
      </div>
    </div>
  );
};

export default Loading;
