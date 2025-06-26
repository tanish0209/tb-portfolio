import react from "../assets/Tech_Logos/react.png"
import tailwind from "../assets/Tech_Logos/tailwind.png"
import bootstrap from "../assets/Tech_Logos/bootstrap.png"
import html from "../assets/Tech_Logos/html.png"
import css from "../assets/Tech_Logos/css.png"
import js from "../assets/Tech_Logos/js.png"
import vite from "../assets/Tech_Logos/vite.png"
import ts from "../assets/Tech_Logos/ts.png"
import nodejs from "../assets/Tech_Logos/nodejs.png"
import express from "../assets/Tech_Logos/express.png"
import mongodb from "../assets/Tech_Logos/mongodb.png"
import npm from "../assets/Tech_Logos/npm.png"
import mysql from "../assets/Tech_Logos/mysql.png"
import postgresql from "../assets/Tech_Logos/postgresql.png"
import git from "../assets/Tech_Logos/git.png"
import github from "../assets/Tech_Logos/git_hub.png"
import vscode from "../assets/Tech_Logos/vscode.png"
import supabase from "../assets/Tech_Logos/supabase.png"
import postman from "../assets/Tech_Logos/postman.svg"
import ai from "../assets/Tech_Logos/ai.png"
import canva from "../assets/Tech_Logos/canva.png"
const skills = {
    frontend: [
        { name: "React.js", proficiency: 8, logo: react },
        { name: "Tailwind CSS", proficiency: 7, logo: tailwind },
        { name: "Bootstrap", proficiency: 8, logo: bootstrap },
        { name: "HTML5", proficiency: 9, logo: html },
        { name: "CSS3", proficiency: 9, logo: css },
        { name: "JavaScript (ES6+)", proficiency: 7, logo: js },
        { name: "Vite", proficiency: 8, logo: vite },
        { name: "TypeScript", proficiency: 6, logo: ts },
    ],

    backend: [
        { name: "JavaScript (ES6+)", proficiency: 7, logo: js },
        { name: "Node.js", proficiency: 7, logo: nodejs },
        { name: "Express.js", proficiency: 7, logo: express },
        { name: "MongoDB", proficiency: 9, logo: mongodb },
        { name: "TypeScript", proficiency: 6, logo: ts },
        { name: "NPM", proficiency: 8, logo: npm },
        { name: "MySQL", proficiency: 8, logo: mysql },
        { name: "PostgreSQL", proficiency: 7, logo: postgresql },
    ],

    tools: [
        { name: "Git", proficiency: 8, logo: git },
        { name: "GitHub", proficiency: 8, logo: github },
        { name: "VS Code", proficiency: 9, logo: vscode },
        { name: "Supabase", proficiency: 6, logo: supabase },
        { name: "Postman", proficiency: 8, logo: postman },
        { name: "Figma", proficiency: 9, logo: react },
        { name: "Adobe Illustrator", proficiency: 7, logo: ai },
        { name: "Canva", proficiency: 8, logo: canva }
    ],
};

export default skills;
