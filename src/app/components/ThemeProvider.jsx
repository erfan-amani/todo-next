"use client";

import React, { useState, useEffect } from "react";
import { ThemeProvider } from "next-themes";

const Provider = ({ children }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <>{children}</>;

  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
};

export default Provider;
