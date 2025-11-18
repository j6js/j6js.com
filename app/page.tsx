"use client";
import Image from "next/image";
import { motion } from "motion/react";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full">
      <div className="fixed z-20 top-2 md:top-4 w-full left-1/2 transform -translate-x-1/2">
        <motion.div
          initial={{ opacity: 0, justifyContent: "center" }}
          animate={{ opacity: 1, justifyContent: "space-around" }}
          transition={{ duration: 0.5 }}
          className="backdrop-blur-md z-20 border border-slate-300 dark:border-slate-100 rounded-md shadow-md md:shadow-xl p-2 md:p-4 w-full md:w-4/5 mx-auto backdrop-contrast-85 flex"
        >
          <motion.div
            initial={{ filter: "blur(10px)" }}
            animate={{ filter: "blur(0px)" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-1"
          >
            <h1 className="font-kanit font-bold text-xl dark:text-blue-300 text-blue-700">
              Jackson Kelly
            </h1>
            <h3 className="font-kanit text-slate-600 dark:text-slate-400">
              Learning Full-Stack Developer
            </h3>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Image
              src="/profile.png"
              height={50}
              width={50}
              className="rounded-full ml-auto"
              alt="A tortoiseshell cat, in a profile picture"
            />
          </motion.div>
        </motion.div>
      </div>
      <div className="text-noto relative z-10 border border-slate-300 dark:border-slate-100 rounded-md shadow-md md:shadow-xl p-2 md:p-4 w-full md:w-4/5 mx-auto mt-24 md:mt-32">
        <h2 className="font-bold text-lg dark:text-blue-300 text-blue-700">
          About Me
        </h2>
        <p className="text-violet-950 dark:text-violet-200 text-noto">
          Kia ora, I&apos;m Jackson — a high school student, who has a keen
          interest in all things technology. Since I was a small child, I have
          always been interested in systems and how they work. Whenever I see
          some sort of system or a piece of technology, I always think about how
          something works and the process of it getting there. Over countless
          hours of reading, watching videos and actually dealing with
          technology, I have managed to acquire lots of knowledge and skill on
          almost any tech related topic.
          <br />
          <br />
          One thing that quickly became my main interest was programming, as it
          is a way to create things, and advanced systems. I especially like
          about computers (and mainly programming), is the ability to process
          complex tasks, like predicting the weather, or even controlling
          something, on the other side of the world with negligible delay.
          <br />
          <br />
          I have also learned how to use software like Linux, and Virtual
          Machines, by configuring a proper homelab setup, which me and
          (sometimes) family use on a daily basis. It runs Home Assistant, TLS
          Reverse Proxies, and other services, and they all run on Proxmox VE 9.
          <br /> <br />
          In September 2024 onwards, I have worked on HTML, CSS, and JavaScript
          alongside freeCodeCamp. One day before school ended in 2024, I
          finished my course of Responsive Web Design, from freeCodeCamp. With
          the help of their resources, the wider internet, and my own
          experimentation, I have experimented with TypeScript, and specifically
          Next.js. I have now finished my first full website in Next.js. That
          project would be this website. As of late 2025, I have started working
          on a new version of this website, with a refreshed design, and updated
          content. It is currently still in development, and I am considering
          using Cloudflare Pages instead of Vercel for hosting.
          <br />
          <br />
          Currently, I serve as the go-to tech support for my family, old
          school, and friends. I help them with any tech issues they may have.
        </p>
      </div>
      <div className="text-noto relative z-10 border border-slate-300 dark:border-slate-100 rounded-md shadow-md md:shadow-xl p-2 md:p-4 w-full md:w-2/5 mx-auto mt-4 md:mt-8">
        <h2 className="font-bold text-lg dark:text-blue-300 text-blue-700">
          Socials
        </h2>
        <p className="text-violet-950 dark:text-violet-200 text-noto">
          <a
            href="https://github.com/j6js"
            target="_blank"
            rel="noreferrer noopener"
            className="hover:text-blue-700 dark:hover:text-blue-300"
          >
            GitHub
          </a>
          <br />
          <a
            href="mailto:j6js@outlook.com"
            className="hover:text-blue-700 dark:hover:text-blue-300"
          >
            Email
          </a>
          <a
            href="https://keys.openpgp.org/vks/v1/by-fingerprint/2CC485B327A195BD084751024CB854F62B8CF2ED"
            target="_blank"
            rel="noreferrer noopener"
            className="hover:text-blue-700 dark:hover:text-blue-300 ml-2"
          >
            (PGP Key)
          </a>
        </p>
      </div>
      <div className="text-noto relative z-10 border border-slate-300 dark:border-slate-100 rounded-md shadow-md md:shadow-xl p-2 md:p-4 w-full md:w-4/5 mx-auto mt-4 md:mt-8">
        <h2 className="font-bold text-lg dark:text-blue-300 text-blue-700">
          Projects & Experience
        </h2>
        <p className="text-violet-950 dark:text-violet-200 text-noto">
          Whenever I get the chance, I like to work on small projects to improve
          my skills, and on the off chance, I have helped with events at my
          previous school, and hope to do so again at my current school.
          <br />
          <br />
        </p>
        <b className="text-violet-800 dark:text-violet-100">
          High School (Year 9):
        </b>
        <br />
        <ul className="text-violet-950 dark:text-violet-200 text-noto ">
          <li>
            2025 - Audio, Lights, and Video for school production of{" "}
            <i>High School Spoofical</i> for Te Awamutu Intermediate
          </li>
        </ul>
        <br />
        <b className="text-violet-800 dark:text-violet-100">
          Intermediate (Middle School):
        </b>
        <br />
        <ul className="text-violet-950 dark:text-violet-200 text-noto ">
          <li>
            2024 Showquest - Waikato - Te Awamutu Intermediate - Main Lighting
            (We got 1st place in the regionals!)
          </li>
          <li>2024 Wearable Arts comp. - Lighting Director</li>
          <li>2024 Talent Quest - Sound, Video, Lighting</li>
          <li>2024- Special Recognition Award - AV Monitor</li>
          <li>
            Refactoring the audio system for the school hall - Improved UI &
            Audio Quality
          </li>
          <li>
            2024 ICAS Digital Technology - Distinction - Top 4% in Pacific/Asia
            Regions
          </li>
        </ul>
      </div>
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-slate-100 to-indigo-200 dark:from-slate-900 dark:to-indigo-900 w-full h-full"></div>
    </div>
  );
}
