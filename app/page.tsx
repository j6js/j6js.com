"use client";
import Image from "next/image";
import { motion } from "motion/react";
import AnimatedGradient from "@/components/fancy/animated-gradient-with-svg";

export default function Home() {
  return (
    <AnimatedGradient
      colors={["#f00", "#0f0", "#00f"]}
      speed={5}
      blur="light"
    ></AnimatedGradient>
  );
}
