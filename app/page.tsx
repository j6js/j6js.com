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
          Kia ora, I&apos;m Jackson. I&apos;m a high school student, who has a
          keen interest in all things technology. Since I was a small child, I
          have always been interested in systems and how they work. Whenever I
          see some sort of system or a piece of technology, I always think about
          how something works and the process of it getting there. Over
          countless hours of reading, watching videos and actually dealing with
          technology, I have managed to aquire lots of knowledge and skill on
          almost any tech related topic.
          <br />
          <br />
          One thing that became an interest was programming, as it was a way to
          create things, and some really advanced systems. One thing I
          especially like about computers (and mainly programming), is that
          it&apos;s able to do extremely advanced things, like predicting the
          weather, or even controlling something, on the other side of the world
          with almost no delay. <br />
          <br />
          Another thing I&apos;ve worked on in the past, is server systems. I
          have managed to aquire some server equipment, and setup a proper
          homelab setup, which me and my family use on a daily basis. It mainly
          runs Home Assistant, Frigate NVR, Unifi Controller, and they all run
          on Proxmox.
          <br /> <br />
          In September 2024 - January 2025, I have worked on HTML, CSS, and
          JavaScript with freeCodeCamp. One day before school ended in 2024, I
          finished my course of Responive Web Design, from freeCodeCamp. With
          the help of their resources, the wider internet, and my own
          experimentation, I have experimented with TypeScript, and spefically
          Next.js. I have now finished my first real project in Next.js. That
          project would be this website.
          <br />
          <br />
          Currently, I serve as the go-to tech support for my family, old
          school, and likely my current school in the future.
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
            href="mailto:jacksonkelly13@icloud.com"
            className="hover:text-blue-700 dark:hover:text-blue-300"
          >
            Email
          </a>
        </p>
      </div>
      <div className="text-noto relative z-10 border border-slate-300 dark:border-slate-100 rounded-md shadow-md md:shadow-xl p-2 md:p-4 w-full md:w-4/5 mx-auto mt-4 md:mt-8">
        <h2 className="font-bold text-lg dark:text-blue-300 text-blue-700">
          Projects & Experience
        </h2>
        <p className="text-violet-950 dark:text-violet-200 text-noto">
          Sometimes I might work on a personal side-project, but usually I help
          out with something for my school. I have worked on a few projects, and
          I have helped with a lot of events and other projects in my school
          life.
          <br />
          <br />
        </p>
        <b className="text-violet-800 dark:text-violet-100">High School:</b>
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
      <div className="fixed inset-0 -z-10 bg-gradient-to-br  white:from-slate-100 white:to-indigo-200 dark:from-slate-900 dark:to-indigo-900 w-full h-full"></div>
    </div>
  );
}
