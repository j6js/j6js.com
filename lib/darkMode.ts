"use client";
import { useState } from "react";

interface DarkModeObject {
  mode: "light" | "dark";
  manual: boolean;
}

export function initDarkMode() {
  const [darkMode, setDarkMode] = useState<DarkModeObject>({
    mode: "light",
    manual: false,
  });
  const dark = window.matchMedia("prefers-dark-mode");
  console.log(`Dark Mode Query: ${dark}`);
}
