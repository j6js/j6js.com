"use client";
import { motion, useScroll } from "motion/react";
import Image from "next/image";
import { useRef } from "react";
import { cn } from "@/lib/utils";
import BreathingText from "./fancy/breathing-text";

export default function Intro() {
  const textRef = useRef<HTMLDivElement>(null);
  return (
    <div className="transition-all duration-700">
      <div
        className="z-[2] font-dynapuff text-[60px] flex items-center justify-center h-screen"
        ref={textRef}
      >
        <motion.div
          initial={{ filter: "blur(13px)" }}
          animate={{ filter: "blur(0px)" }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.9 }}
        >
          <motion.div
            initial={{ marginRight: "0px", scale: 0.75 }}
            animate={{ marginRight: "44px", scale: 1 }}
            transition={{ delay: 1.1, duration: 1, ease: "easeInOut" }}
          >
            <Image
              src="/profile.png"
              width={130}
              height={130}
              alt="Profile Pic"
              className="drop-shadow-lg  transition-all duration-700"
            />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ filter: "blur(10px)" }}
          animate={{ filter: "blur(0px)" }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.9 }}
        >
          <motion.div
            initial={{ scaleX: 0.09, scaleY: 0.00001 }}
            animate={{ scaleX: 1, scaleY: 1 }}
            transition={{ delay: 1.05, duration: 1, ease: "easeInOut" }}
          >
            <BreathingText
              label="Jackson Kelly"
              fromFontVariationSettings="'wght' 400, 'slnt' -10"
              toFontVariationSettings="'wght' 700, 'slnt' 1"
              staggerDuration={0.6}
              staggerFrom="center"
            />
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        initial={{ filter: "blur(10px)", scale: 0.5 }}
        animate={{ filter: "blur(0px)", scale: 1 }}
        transition={{ duration: 0.9, ease: "easeInOut" }}
      >
        <div className="z-[1] absolute bottom-0 left-0 right-0 flex justify-center">
          <div>
            <motion.div
              initial={{ filter: "blur(10px)", scale: 0.8 }}
              animate={{ filter: "blur(0px)", scale: 1 }}
              transition={{ delay: 0.9, duration: 1 }}
            >
              <motion.div
                initial={{ translateY: 2 }}
                animate={{ translateY: 3 }}
                transition={{
                  repeat: Infinity,
                  duration: 1,
                  repeatType: "reverse",
                  ease: "easeInOut",
                  delay: 1.9,
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  x="0px"
                  y="-10px"
                  viewBox="0 0 72 90"
                  enableBackground="new 0 0 72 72"
                  className="fill-slate-900 dark:fill-yellow-200 w-24 h-24 translate-y-20"
                >
                  <g>
                    <polygon points="36,43.7 27.6,35.2 25.4,37.4 36,47.9 46.6,37.3 44.4,35.2  " />
                  </g>
                </svg>
              </motion.div>
              <motion.div
                initial={{ translateY: 20 }}
                animate={{ translateY: -0.41 }}
                transition={{
                  repeat: Infinity,
                  duration: 1,
                  repeatType: "reverse",
                  ease: "easeInOut",
                  delay: 1.9,
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 72 90"
                  enableBackground="new 0 0 72 72"
                  className="fill-slate-900 dark:fill-yellow-200 w-24 h-24"
                >
                  <g>
                    <polygon points="46.6,27 44.4,24.9 36,33.3 27.6,24.9 25.4,27 36,37.5  " />
                  </g>
                </svg>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
