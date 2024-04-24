import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import hydrobrdImg from "@/public/hydrobrd.png";
import salarypredictionImg from "@/public/Salary_Prediction.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

//note cannot do icon: <LuGraduationCap /> as file is ts and not tsx hence using React.createElement
export const experiencesData = [
  {
    title: "Graduated from Charusat University",
    location: "Gujarat, India",
    description: "An upcoming graduate in BTech - Computer Science",
    icon: React.createElement(LuGraduationCap),
    date: "2020 - 2024",
  },
  {
    title: "Sofware Engineer Intern",
    location: "Gujarat, India",
    description:
      "I worked as a full-stack developer for 10 months and built a portfolio website for my employer.",
    icon: React.createElement(CgWorkAlt),
    date: "2023-2024",
  },
  {
    title: "Full-Stack Freelance Developer",
    location: "India",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, MongoDB, Firebase and Redis. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2024 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Hydro Pneumatic Equipment Portfolio",
    description:
      "I worked as a full-stack developer on this project for 10 months. Users can browse the catalogue, and read Blogs. Admin has the ability to leverage Email-Marketing to increase further sales.",
    tags: ["React", "JavaScript", "Firebase", "Bootstrap", "Redis"],
    imageUrl: hydrobrdImg,
  },
  {
    title: "Salary Prediction",
    description:
      "A public application which users can use to predict Software Salaries based on 2022 StackOverflow data. I built a regression model and deployed it on the web",
    tags: [
      "Streamlit",
      "Python",
      "Jupyter Notebook",
      "Scikit-learn",
      "Matplotlib",
    ],
    imageUrl: salarypredictionImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "C++",
  "CI/CD",
  "NGINX",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Redis",
  "MongoDB",
  "Firebase",
  "REST APIs",
  "Express",
  "PostgreSQL",
  "Python",
  "Framer Motion",
] as const;
