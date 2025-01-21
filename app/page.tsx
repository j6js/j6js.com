"use server";
import Background from "@/components/background";
import Intro from "@/components/intro";
import { Suspense } from "react";

export default async function Home() {
  return (
    <div>
      <Suspense
        fallback={<div className="w-full h-screen z-50 bg-purple-700"></div>}
      >
        <Background />
        <Intro />
      </Suspense>
    </div>
  );
}
