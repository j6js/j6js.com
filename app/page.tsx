"use client";
import AnimatedGradient from "@/components/fancy/animated-gradient-with-svg";
import { initDarkMode } from "@/lib/darkMode";

export default function Home() {
  initDarkMode();
  return (
    <div>
      <div className="-z-50 fixed w-full h-screen bg-teal-200 dark:bg-teal-950">
        <AnimatedGradient
          colors={["#da241e", "#fffff", "#33df18"]}
          blur="medium"
          speed={0.025}
        />
      </div>
    </div>
  );
}
