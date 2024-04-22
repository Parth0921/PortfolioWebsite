"use client";

import { motion } from "framer-motion";
import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About", 0.75);

  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        An upcoming graduating with a Bachelors in{" "}
        <span className="font-medium">Computer Science</span>, I have been
        pursuing my passion for programming. Being a tech enthusiast I started
        learning <span className="font-medium">full-stack web development</span>
        . <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, Express, and MongoDB
        </span>
        . I am also familiar with TypeScript and Docker. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and spending time with family and friends.
        I am intrigued by{" "}
        <span className="font-medium">
          solving puzzles like Rubik's Cube, Chess and Sudoku along with
          expanding my{" "}
          <span className="font-bold">
            {" "}
            Data Structures and Algorithms skills{" "}
          </span>
        </span>
        . I am currently reading about{" "}
        <span className="font-medium">business and philosophy</span>.
      </p>
    </motion.section>
  );
}
