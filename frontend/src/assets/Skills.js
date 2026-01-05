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
import figma from "../assets/Tech_Logos/figma.png"
import java from "../assets/Tech_Logos/java.png"
import nextjs from "../assets/Tech_Logos/nextjs.svg"
import redux from "../assets/Tech_Logos/redux.png"
import zustand from "../assets/Tech_Logos/zustand.png"
import aws from "../assets/Tech_Logos/aws.png"
import docker from "../assets/Tech_Logos/docker.png"
import kubernetes from "../assets/Tech_Logos/kubernetes.png"
import githubactions from "../assets/Tech_Logos/githubactions.png"
import jenkins from "../assets/Tech_Logos/jenkins.png"
const skills = {
    languages: [
        { name: "Java", proficiency: 7, logo: java },
        { name: "JavaScript (ES6+)", proficiency: 7, logo: js },
        { name: "TypeScript", proficiency: 8, logo: ts },
        { name: "HTML5", proficiency: 9, logo: html },
    ],
    frontend: [
        { name: "React.js", proficiency: 9, logo: react },
        { name: "Next.js", proficiency: 7, logo: nextjs },
        { name: "Redux", proficiency: 6, logo: redux },
        { name: "Zustand", proficiency: 6, logo: zustand },
        { name: "TypeScript", proficiency: 8, logo: ts },
        { name: "JavaScript (ES6+)", proficiency: 7, logo: js },
        { name: "HTML5", proficiency: 9, logo: html },
        { name: "CSS3", proficiency: 9, logo: css },
        { name: "Tailwind CSS", proficiency: 7, logo: tailwind },
        { name: "Bootstrap", proficiency: 8, logo: bootstrap },
        { name: "Vite", proficiency: 8, logo: vite },
    ],

    backend: [
        { name: "JavaScript (ES6+)", proficiency: 8, logo: js },
        { name: "TypeScript", proficiency: 8, logo: ts },
        { name: "Node.js", proficiency: 7, logo: nodejs },
        { name: "Express.js", proficiency: 7, logo: express },
        { name: "MongoDB", proficiency: 9, logo: mongodb },
        { name: "PostgreSQL", proficiency: 7, logo: postgresql },
        { name: "MySQL", proficiency: 8, logo: mysql },
        { name: "NPM", proficiency: 8, logo: npm },
    ],


    cloud: [
        { name: "AWS", proficiency: 6, logo: aws },
        { name: "Docker", proficiency: 7, logo: docker },
        { name: "Kubernetes", proficiency: 6, logo: kubernetes },
        { name: "GitHub Actions", proficiency: 5, logo: githubactions },
        { name: "Jenkins", proficiency: 4, logo: jenkins },

    ],
    tools: [
        { name: "Git", proficiency: 8, logo: git },
        { name: "GitHub", proficiency: 8, logo: github },
        { name: "VS Code", proficiency: 9, logo: vscode },
        { name: "Supabase", proficiency: 6, logo: supabase },
        { name: "Postman", proficiency: 8, logo: postman },
        { name: "Figma", proficiency: 9, logo: figma },
        { name: "Adobe Illustrator", proficiency: 7, logo: ai },
        { name: "Canva", proficiency: 8, logo: canva }
    ],
};

export default skills;
