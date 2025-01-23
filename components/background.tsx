"use client";
import { motion, useScroll, useTransform } from "motion/react";
import AnimatedGradient from "./fancy/animated-gradient-with-svg";

export default function Background() {
  const { scrollYProgress, scrollY, scrollXProgress, scrollX } = useScroll();
  const innerBgColor = useTransform(scrollY, [0, 1000], ["#CA7DF9", "#01A7C2"]);
  const outerBgColor = useTransform(scrollY, [0, 1000], ["#6c28a8", "#137584"]);
  return (
    <div>
      <motion.div
        style={{ backgroundColor: outerBgColor }}
        className="fixed z-[-4] w-full h-screen"
      ></motion.div>
      <motion.div
        style={{ backgroundColor: innerBgColor }}
        className="z-[-2] fixed min-w-full h-screen  blur-3xl transition-colors duration-1000 ease-in-out"
      >
        <div className="w-1/2 h-1/2 bg-inherit relative float-left">
          <AnimatedGradient
            colors={[
              "#C2EABA",
              "#01A7C2",
              "#9CFC97",
              "#F9F871",
              "#F9A871",
              "#C2EABA",
              "#01A7C2",
              "#9CFC97",
              "#F9F871",
            ]}
            blur="none"
            speed={0.025}
          />
        </div>
        <div className="w-1/2 h-1/2 bg-inherit relative float-left">
          <AnimatedGradient
            colors={["#C2EABA", "#01A7C2", "#9CFC97", "#F9F871", "#F9A871"]}
            blur="none"
            speed={0.025}
          />
        </div>
        <div className="w-1/2 h-1/2 bg-inherit relative float-right">
          <AnimatedGradient
            colors={["#C2EABA", "#01A7C2", "#9CFC97", "#F9F871", "#F9A871"]}
            blur="none"
            speed={0.025}
          />
        </div>
        <div className="w-1/2 h-1/2 bg-inherit relativ float-right">
          <AnimatedGradient
            colors={["#C2EABA", "#01A7C2", "#9CFC97", "#F9F871", "#F9A871"]}
            blur="none"
            speed={0.025}
          />
        </div>
      </motion.div>
    </div>
  );
}
