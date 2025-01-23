"use client";
import { motion, useScroll, useTransform, cubicBezier } from "motion/react";

export default function ScrollNudge() {
  const { scrollY } = useScroll();
  const showArrow = useTransform(scrollY, [40, 41], ["flex", "none"]);
  const arrowOpacity = useTransform(scrollY, [0, 40], [1, 0], {
    ease: cubicBezier(0.42, 0, 0.58, 1),
  });
  return (
    <motion.div
      initial={{ filter: "blur(10px)", scale: 0.8 }}
      animate={{ filter: "blur(0px)", scale: 1 }}
      transition={{ delay: 0.9, duration: 1 }}
      style={{ display: showArrow, opacity: arrowOpacity }}
      className="flex-col -space-y-20"
    >
      <motion.div
        initial={{ translateY: 15 }}
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
          y="0px"
          viewBox="0 0 72 90"
          enableBackground="new 0 0 72 72"
          className="h-24 w-24"
        >
          <g>
            <polygon points="36,43.7 27.6,35.2 25.4,37.4 36,47.9 46.6,37.3 44.4,35.2  " />
          </g>
        </svg>
      </motion.div>
      <motion.div
        initial={{ translateY: 20 }}
        animate={{ translateY: -12.7 }}
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
          className="w-24 h-24"
        >
          <g>
            <polygon points="36,43.7 27.6,35.2 25.4,37.4 36,47.9 46.6,37.3 44.4,35.2  " />
          </g>
        </svg>
      </motion.div>
    </motion.div>
  );
}
