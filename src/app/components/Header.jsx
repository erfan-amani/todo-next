"use client";

import { signOut } from "next-auth/react";
import Link from "next/link";
import React from "react";
import SignOut from "./Icons/SignOut";

const Header = () => {
  const signOutHandler = async () => {
    signOut();
  };

  return (
    <div className="flex items-center justify-between flex-shrink-0">
      <Link href="/" className="font-medium text-xl">
        Todo
      </Link>
      <button onClick={signOutHandler}>
        <SignOut />
      </button>
    </div>
  );
};

export default Header;