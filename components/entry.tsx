"use client";
import { motion } from "motion/react";
import { ReactNode } from "react";

export default function Entry({ children }: { children: ReactNode }) {
  return (
    <div className="w-full min-h-screen">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="w-full h-full z-[49]"
      >
        {children}
      </motion.div>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.9, ease: "easeInOut" }}
        className="z-50 fixed top-0 left-0 bg-[#6d28a8] w-full h-screen"
      ></motion.div>
    </div>
  );
}
