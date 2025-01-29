"use server";
import Background from "@/components/background";
import Intro from "@/components/intro";
import Entry from "@/components/entry";
import Cards from "@/components/cards";
import Cursor from "@/components/cursor";
import { Suspense, ReactNode } from "react";
import Script from "next/script";

export default async function Home() {
  return (
    <div>
      <Cursor />
      <Suspense fallback={suspenseFallback()}>
        <Entry>
          <Background />
          <Intro />
          <Cards />
        </Entry>
      </Suspense>
      <Script src="https://unpkg.com/lenis@1.1.20/dist/lenis.min.js" />
      <Script src="/lenis.js" type="module" />
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
