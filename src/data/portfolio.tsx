import type { Project } from "../types";

export const profile = {
  name: "Idris Popoola",
  descriptor: "Idris in 2025",

  basedIn: {
    label: "London, United Kingdom",
    url: "https://en.wikipedia.org/wiki/London",
  },

  role: "Software Developer",

  education: [
    {
      years: "2016–2023",
      institution: "Beths Grammar School",
      url: "https://en.wikipedia.org/wiki/Beths_Grammar_School",
    },
    {
      years: "2023–2027",
      institution: "The University of Manchester",
      url: "https://en.wikipedia.org/wiki/University_of_Manchester",
    },
  ],

  career: [
    {
      years: "2024",
      organisation: "Transport for London",
      url: "https://en.wikipedia.org/wiki/Transport_for_London",
      role: "Project Management Work Experience",
    },
    {
      years: "2024–2025",
      organisation: "The University of Manchester",
      url: "https://en.wikipedia.org/wiki/University_of_Manchester",
      role: "Mathematics Tutor",
    },
    {
      years: "2025–2026",
      organisation: "Computacenter",
      url: "https://en.wikipedia.org/wiki/Computacenter",
      role: "Software Developer Industrial Placement",
    },
  ],

  headshot: "/images/headshot.jpg",
  cv: "/documents/Idris_Popoola_CV.pdf",

  links: {
    linkedin: "https://www.linkedin.com/in/idris-p-a34465246/",
    github: "https://github.com/idris-p",
    email: "mailto:idrispopoola05@gmail.com",
  },
};

export const introParagraphs = [
  <>
    {" is a "}
    <a href="https://en.wikipedia.org/wiki/Software_development" target="_blank" rel="noreferrer">
      software developer
    </a>
    {" and "}
    <a href="https://en.wikipedia.org/wiki/Computer_science" target="_blank" rel="noreferrer">
      Computer Science
    </a>
    {" and "}
    <a href="https://en.wikipedia.org/wiki/Mathematics" target="_blank" rel="noreferrer">
      Mathematics
    </a>
    {" student at "}
    <a href="https://en.wikipedia.org/wiki/University_of_Manchester" target="_blank" rel="noreferrer">
      The University of Manchester
    </a>
    {". Drawn to simplicity and understanding how things work from the ground up, he enjoys taking simple concepts and combining them to build more advanced ideas, which can then be used to bring creative ideas to life. He aims to use this unique perspective to contribute meaningfully to the tech industry and beyond."}
  </>,

  <>
    His work has included software development in industry, academic and personal
    software projects, and mathematics tutoring. This page provides an overview of his education, career, and
    projects.
  </>,
];

export const modules = [
  {
    name: "Introduction to Programming I",
    subject: "COMP",
    year: "Year 1",
    semester: "1",
    grade: "80%",
  },
  {
    name: "Mathematical Foundations and Analysis",
    subject: "MATH",
    year: "Year 1",
    semester: "1",
    grade: "87%",
  },
  {
    name: "Probability I",
    subject: "MATH",
    year: "Year 1",
    semester: "1",
    grade: "97%",
  },
  {
    name: "First Year Team Project",
    subject: "COMP",
    year: "Year 1",
    semester: "1 & 2",
    grade: "80%",
  },
  {
    name: "Data Science",
    subject: "COMP",
    year: "Year 1",
    semester: "2",
    grade: "85%",
  },
  {
    name: "Introduction to Ordinary Differential Equations",
    subject: "MATH",
    year: "Year 1",
    semester: "2",
    grade: "75%",
  },
  {
    name: "Introduction to Programming II",
    subject: "COMP",
    year: "Year 1",
    semester: "2",
    grade: "74%",
  },
  { name: "Linear Algebra", subject: "MATH", year: "Year 1", semester: "2", grade: "80%" },
  { name: "Vector Calculus", subject: "MATH", year: "Year 1", semester: "-", grade: "-" },

  { name: "Introduction to Artificial Intelligence", subject: "COMP", year: "Year 2", semester: "1", grade: "65%" },
  { name: "Mathematical Modelling", subject: "MATH", year: "Year 2", semester: "1", grade: "82%" },
  { name: "Software Engineering I", subject: "COMP", year: "Year 2", semester: "1", grade: "72%" },
  { name: "Algorithms and Data Structures", subject: "COMP", year: "Year 2", semester: "1 & 2", grade: "70%" },
  { name: "Groups and Geometry", subject: "MATH", year: "Year 2", semester: "1 & 2", grade: "81%" },
  { name: "Partial Differential Equations and Vector Calculus", subject: "MATH", year: "Year 2", semester: "1 & 2", grade: "86%" },
  { name: "Introduction to Financial Mathematics", subject: "MATH", year: "Year 2", semester: "2", grade: "85%" },
  { name: "Machine Learning", subject: "COMP", year: "Year 2", semester: "2", grade: "81%" },
  { name: "Software Engineering II", subject: "COMP", year: "Year 2", semester: "2", grade: "71%" },
  { name: "Introduction to Visual Computing", subject: "COMP", year: "Year 2", semester: "-", grade: "-" },

  { name: "Artificial Intelligence and Games", subject: "COMP", year: "Year 3", semester: "1", grade: "-" },
  { name: "Combinatorics and Graph Theory", subject: "MATH", year: "Year 3", semester: "1", grade: "-" },
  { name: "Graphics and Virtual Environments", subject: "COMP", year: "Year 3", semester: "1", grade: "-" },
  { name: "Mathematical Logic", subject: "MATH", year: "Year 3", semester: "1", grade: "-" },
  { name: "Computational Game Theory", subject: "COMP", year: "Year 3", semester: "2", grade: "-" },
  { name: "Computer Vision", subject: "COMP", year: "Year 3", semester: "2", grade: "-" },
  { name: "Mathematics Education", subject: "MATH", year: "Year 3", semester: "2", grade: "-" },
  // { name: "Wave Motion", subject: "MATH", year: "Year 3", semester: "2", grade: "-" },
];

export const aLevelResults = [
  { subject: "Computer Science", grade: "A*" },
  { subject: "Further Mathematics", grade: "A*" },
  { subject: "Mathematics", grade: "A*" },
  { subject: "Physics", grade: "A*" }
];

export const gcseResults = [
  { subject: "Art & Design", grade: "7" },
  { subject: "Biology", grade: "9" },
  { subject: "Chemistry", grade: "9" },
  { subject: "Computer Science", grade: "9" },
  { subject: "English Language", grade: "7" },
  { subject: "English Literature", grade: "5" },
  { subject: "Geography", grade: "7" },
  { subject: "Mathematics", grade: "9" },
  { subject: "Physics", grade: "9" },
  { subject: "Religious Education", grade: "7" },
  { subject: "Spanish", grade: "8" },
];

export const projects: Project[] = [
  {
    slug: "rush-hour",
    name: "Rush Hour",
    thumbnail: "/images/projects/rush_hour.png",
    description: "A browser-based speedrunning game based on traversing the London Underground network.",
    technologies: ["TypeScript", "HTML Canvas", "React"],
    year: "July 2026",
    hasWikiPage: true,
  },
  {
    slug: "super-mario-bros-clone",
    name: "Super Mario Bros. C++ Clone",
    thumbnail: "/images/projects/mario.png",
    description: "A recreation of the first level of Super Mario Bros., including physics, collisions, animation and audio. Idris took on this project to learn the basic syntax of C++.",
    technologies: ["C++", "raylib"],
    year: "July 2026",
    repositoryUrl: "https://github.com/idris-p/mario-bros-clone",
  },
  {
    slug: "pseudocompiler",
    name: "PseudoCompiler",
    thumbnail: "/images/projects/pseudocompiler.png",
    description: "A configurable pseudocode editor and interpreter with a custom language pipeline.",
    technologies: ["TypeScript", "React", "Node.js", "Tailwind CSS"],
    year: "March 2026",
    repositoryUrl: "https://github.com/idris-p/PseudoCompiler",
  },
  {
    slug: "formula-one-strategy-analyser",
    name: "Formula One Strategy Analyser",
    thumbnail: "/images/projects/f1.png",
    description: "A web application for visualising Formula One race strategies, tyre usage and stint data.",
    technologies: ["Python", "FastAPI", "React", "FastF1", "Docker"],
    year: "December 2025",
    repositoryUrl: "https://github.com/idris-p/F1-Strategy-Viewer",
  },
  {
    slug: "snapbook",
    name: "Snapbook",
    thumbnail: "/images/projects/snapbook.jpeg",
    description: "A full-stack web and mobile scrapbook application built around an interactive 3D globe. Built in a team during GreatUniHack 2025.",
    technologies: ["Java", "Firebase", "React", "React Native"],
    year: "November 2025",
  },
  {
    slug: "chess-escape",
    name: "Chess Escape",
    thumbnail: "/images/projects/chess.png",
    description: "A chess puzzle game where the objective is to move a chess piece to the opposite side of the board without getting captured.",
    technologies: ["Python", "Tkinter", "PIL"],
    year: "December 2023",
    repositoryUrl: "https://github.com/idris-p/Chess-Escape",
  },
  {
    slug: "graphing-calculator",
    name: "Graphing Calculator",
    thumbnail: "/images/projects/graphing_calculator.png",
    description: "A Python graphing calculator with equation plotting and calculus functionality. This was Idris' first major programming project, built prior to the rise of LLMs.",
    technologies: ["Python", "NumPy", "Tkinter"],
    year: "August 2022",
    repositoryUrl: "https://github.com/idris-p/Graphing-Calculator",
  },
];

export const technicalSkills = [
  "Languages: Python, TypeScript, JavaScript, Java, C++, PowerShell",
  "Web: React, FastAPI, Flask, HTML/CSS",
  "Data and AI: pandas, NumPy, scikit-learn, Jupyter",
  "Tools and platforms: Git, Docker, Azure",
];

export const softSkills = [
  "Problem-solving",
  "Communication with technical and non-technical stakeholders",
  "Teamwork",
  "Mentoring, tutoring, and leadership",
  "Independent research",
];
