"use client";
import { motion } from "motion/react";

export default function Cards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-10 md:pt-20 p-7">
      <div className="bg-opacity-30 col-span-2 p-5 bg-[#6d28a8] rounded-lg shadow-lg">
        <div className="flex">
          <motion.div>Kia&nbsp;ora</motion.div>
          <motion.div>,&nbsp;I&apos;m&nbsp;Jackson</motion.div>
        </div>
      </div>
    </div>
  );
}
