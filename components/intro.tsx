"use client";
import { motion } from "motion/react";
import Image from "next/image";
import { useRef } from "react";
import { cn } from "@/lib/utils";
import BreathingText from "./fancy/breathing-text";

export default function Intro() {
  const textRef = useRef<any>(null);
  return (
    <div
      className="font-dynapuff text-[60px] flex items-center justify-center h-screen"
      ref={textRef}
    >
      <motion.div
        initial={{ filter: "blur(13px)" }}
        animate={{ filter: "blur(0px)" }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <motion.div
          initial={{ marginRight: "0px", scale: 0.75 }}
          animate={{ marginRight: "44px", scale: 1 }}
          transition={{ delay: 0.2, duration: 1, ease: "easeInOut" }}
        >
          <Image
            src="/profile.png"
            width={130}
            height={130}
            alt="Profile Pic"
          />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ filter: "blur(10px)" }}
        animate={{ filter: "blur(0px)" }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <motion.div
          initial={{ scaleX: 0.09, scaleY: 0.00001 }}
          animate={{ scaleX: 1, scaleY: 1 }}
          transition={{ delay: 0.15, duration: 1, ease: "easeInOut" }}
        >
          <BreathingText
            label="Jackson Kelly"
            fromFontVariationSettings="'wght' 400, 'slnt' -10"
            toFontVariationSettings="'wght' 700, 'slnt' 1"
            staggerDuration={0.6}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
