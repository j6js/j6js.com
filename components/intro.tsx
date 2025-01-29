"use client";
import { motion, useScroll, useTransform, cubicBezier } from "motion/react";
import Image from "next/image";
import { useRef } from "react";
import { cn } from "@/lib/utils";
import BreathingText from "./fancy/breathing-text";
import ScrollNudge from "./scroll-nudge";

export default function Intro() {
  const textRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const showArrow = useTransform(scrollY, [40, 41], ["flex", "none"]);
  const arrowOpacity = useTransform(scrollY, [0, 40], [1, 0], {
    ease: cubicBezier(0.42, 0, 0.58, 1),
  });
  return (
    <div className="transition-all duration-700">
      <div
        className="z-[2] font-dynapuff text-[60px] flex flex-wrap flex-col md:flex-row items-center justify-center h-screen"
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
        <div className="flex gap-4">
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
                label="Jackson"
                fromFontVariationSettings="'wght' 400, 'slnt' -10"
                toFontVariationSettings="'wght' 700, 'slnt' 1"
                staggerDuration={0.6}
                staggerFrom="center"
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
                label="Kelly"
                fromFontVariationSettings="'wght' 400, 'slnt' -10"
                toFontVariationSettings="'wght' 700, 'slnt' 1"
                staggerDuration={0.6}
                staggerFrom="center"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
      <motion.div
        initial={{ filter: "blur(10px)", scale: 0.5 }}
        animate={{ filter: "blur(0px)", scale: 1 }}
        transition={{ duration: 0.9, ease: "easeInOut" }}
        style={{ display: showArrow, opacity: arrowOpacity }}
      >
        <div className="z-[1] absolute bottom-0 left-0 right-0 flex justify-center">
          <ScrollNudge />
        </div>
      </motion.div>
    </div>
  );
}
