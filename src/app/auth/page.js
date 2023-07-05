"use client";

import UserRectangle from "@/app/components/Icons/UserRectangle";
import { signIn, useSession } from "next-auth/react";
import React from "react";
import AuthInput from "./components/AuthInput";

const AuthUser = () => {
  const session = useSession();

  const onSubmit = async (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    signIn("credentials", {
      redirect: true,
      email,
      password,
      callbackUrl: "http://localhost:3001",
    });
  };

  return (
    <div className="m-auto flex flex-col gap-20 w-full max-w-[400px]">
      <div className="flex flex-col items-center justify-center fill-neutral-700 text-neutral-700">
        <div>
          <UserRectangle width="40" height="40" fill="inherit" />
        </div>
        <h3 className="text-2xl font-bold text-inherit">LOGIN</h3>
        {/* <h3 className="text-2xl font-bold text-inherit">REGISTER</h3> */}
      </div>
      <form
        onSubmit={onSubmit}
        className="flex flex-col items-center justify-center gap-2"
      >
        <AuthInput label="Email" type="email" name="email" />

        <AuthInput label="Password" type="password" name="password" />

        <button className="p-3 mt-4 bg-indigo-400 text-white w-full rounded-md">
          Login/Register
        </button>
      </form>
    </div>
  );
};

export default AuthUser;