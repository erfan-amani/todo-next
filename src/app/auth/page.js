"use client";

import UserRectangle from "@/app/components/Icons/UserRectangle";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import AuthInput from "./components/AuthInput";

const AuthUser = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);
  const session = useSession();
  const router = useRouter();

  if (session.status === "authenticated") {
    router.replace("/");
  }

  const onSubmit = async (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    if (!email) return setError("Email can not be empty!");
    if (!password) return setError("Password can not be empty!");

    setLoading(true);

    const respons = await signIn("credentials", {
      redirect: false,
      email,
      password,
      callbackUrl: process.env.NEXT_PUBLIC_BASE_URL,
    });

    if (respons.error) {
      setError(respons.error);
    }

    setLoading(false);
  };

  return (
    <div className="m-auto flex flex-col gap-14 w-full max-w-[400px]">
      <div className="flex flex-col items-center justify-center fill-neutral-700 text-neutral-700 dark:fill-neutral-200 dark:text-neutral-200">
        <div>
          <UserRectangle width="40" height="40" fill="inherit" />
        </div>
        <h3 className="text-2xl font-bold text-inherit">LOGIN</h3>
      </div>

      <form
        onSubmit={onSubmit}
        className="flex flex-col items-center justify-center gap-2"
      >
        {error && (
          <div className="mb-4">
            <p className="text-red-400 dark:text-red-200">{error}</p>
          </div>
        )}

        <AuthInput label="Email" type="email" name="email" />

        <AuthInput label="Password" type="password" name="password" />

        {loading ? (
          <div className="animate-pulse flex items-center justify-center cursor-default mt-2 w-full h-11 rounded-md bg-neutral-50 dark:bg-gray-700">
            <span className="opacity-40 m-auto">Please wait...</span>
          </div>
        ) : (
          <button className="p-3 mt-4 bg-indigo-400 text-white dark:text-neutral-800 w-full rounded-md">
            Login/Register
          </button>
        )}
      </form>
    </div>
  );
};

export default AuthUser;
