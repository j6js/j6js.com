"use server";
import Background from "@/components/background";
import Intro from "@/components/intro";

export default async function Home() {
  return (
    <div>
      <Background />
      <Intro />
    </div>
  );
}
