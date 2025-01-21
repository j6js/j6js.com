"use server";
import Background from "@/components/background";
import Intro from "@/components/intro";
import Entry from "@/components/entry";
import { Suspense, ReactNode } from "react";

export default async function Home() {
  return (
    <div>
      <Suspense fallback={suspenseFallback()}>
        <Entry>
          <Background />
          <Intro />
        </Entry>
      </Suspense>
    </div>
  );
}

function suspenseFallback() {
  return (
    <div className="fixed w-full h-screen">
      <div className="fixed -z-50 bg-[#6d28a8] w-full h-screen"></div>
      <div className="-z-40 fixed min-w-full h-screen bg-[#CA7DF9] blur-3xl transition-all duration-1000 ease-in-out"></div>
    </div>
  );
}
