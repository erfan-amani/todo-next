"use client";

import { signOut } from "next-auth/react";
import Link from "next/link";
import React from "react";
import SignOut from "./Icons/SignOut";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const signOutHandler = async () => {
    signOut();
  };

  return (
    <div className="flex items-center justify-between flex-shrink-0">
      <Link href="/" className="font-medium text-xl text-neutral-800">
        Todo
      </Link>
      <div className="flex items-center gap-4">
        <ThemeToggle />

        <button onClick={signOutHandler}>
          <SignOut />
        </button>
      </div>
    </div>
  );
};

export default Header;
