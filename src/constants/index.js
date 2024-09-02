import { azul, deloitte } from "../assets/images";
import {
    java,
    python,
    cplusplus,
    haskell,
    contact,
    css,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    nextjs,
    nodejs,
    react,
    tailwindcss,
    typescript,
    minesweeper,
    filter,
    detector,
    recommender,
} from "../assets/icons";

export const skills = [
    {
        imageUrl: java,
        name: "Java",
        type: "Backend",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Backend",
    },
    {
        imageUrl: cplusplus,
        name: "C++",
        type: "General-purpose",
    },
    {
        imageUrl: haskell,
        name: "Haskell",
        type: "Functional",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },


];

export const experiences = [
    {
        title: "Junior Software Engineer Intern",
        company_name: "Azul Systems",
        icon: azul,
        iconBg: "#accbe1",
        date: "July 2023 - September 2023",
        points: [
            "Developing a web application for visualizing Java syntax files using React.js, Node.js and other related technologies.",
            "Implementing features such as syntax highlighting, search functionality and directed acyclic graphs to visually represent complex relationships betweens hundreds of grammar files.",
            "Implementing responsive design and ensuring ease of use.",
            "Taking initiative to propose innovative product ideas and actively participating in project discussions.",
        ],
    },
    {
        title: "Cyber Risk Analyst Intern",
        company_name: "Deloitte",
        icon: deloitte,
        iconBg: "#fbc3bc",
        date: "September 2022",
        points: [
            "Training with tools used for cyber security attacks and cyber risk assessment.",
            "Gaining skills in identifying vulnerable ports, assesing potential risks and executing recon strategies.",
        ],
    }
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: filter,
        theme: 'btn-back-red',
        name: 'Profanity Filter Extension',
        description: 'Google Chrome extension for censoring words and blocking domains.',
        link: 'https://github.com/aristotelisl/Profanity-ShutOff-Extension',
    },
    {
        iconUrl: minesweeper,
        theme: 'btn-back-green',
        name: 'Minesweeper',
        description: 'The classic game everyone knows and loves.',
        link: 'https://github.com/aristotelisl/minesweeper',
    },
    {
        iconUrl: detector,
        theme: 'btn-back-blue',
        name: 'Fake news detector using Machine Learning',
        description: 'Detection of fake news on Twitter using machine learning techniques. Distinguishes between real and fake tweets based on their content.',
        link: 'https://github.com/aristotelisl/COMP3222---CW-MediaEval2015',
    },
    {
        iconUrl: recommender,
        theme: 'btn-back-pink',
        name: 'Recommender System',
        description: 'Cosine similarity recommender system algorithm which trains and then predicts ratings for a 100k set of items.',
        link: 'https://github.com/aristotelisl/Cosine-Similarity-Recommender-System',
    },
];