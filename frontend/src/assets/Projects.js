import user_login from "./projects/eazytrack/user_login.png"
import dashboard from "./projects/eazytrack/dashboard.png"
import dashboard_chart from "./projects/eazytrack/dashboard_chart.png"
import income from "./projects/eazytrack/income.png"
import income_chart from "./projects/eazytrack/income_chart.png"
import expense from "./projects/eazytrack/expense.png"
import expense_chart from "./projects/eazytrack/expense_chart.png"
import Landing from "./projects/eazyquizz/Landing.png"
import Login from "./projects/eazyquizz/Login.png"
import student_analytics from "./projects/eazyquizz/student_analytics.png"
import student_dashboard from "./projects/eazyquizz/student_dashboard.png"
import student_insights from "./projects/eazyquizz/student_insights.png"
import teacher_analytics from "./projects/eazyquizz/teacher_analytics.png"
import teacher_create from "./projects/eazyquizz/teacher_create.png"
import teacher_dashboard from "./projects/eazyquizz/teacher_dashboard.png"
import teacher_quizzes from "./projects/eazyquizz/teacher_quizzes.png"
import admin_appointments from "./projects/healthime/admin_appointments.png"
import admin_doctors from "./projects/healthime/admin_doctors.png"
import admin_landing from "./projects/healthime/admin_landing.png"
import hero from "./projects/healthime/hero.png"
import user_appointments from "./projects/healthime/user_appointments.png"
import user_doctors from "./projects/healthime/user_doctors.png"
import user_landing from "./projects/healthime/user_landing.png"
import enactus_hero from "./projects/enactus/enactus_hero.png"

const Projects = {
    EazyTrack: {
        name: "EazyTrack",
        tech: ["React", "JavaScript", "MongoDB", "Node.js", "Express.js"],
        desc: `EazyTrack is a modern expense tracker web app built using React, React Router, and Tailwind CSS. It helps users manage their finances efficiently by tracking income and expenses with clean visualizations powered by Recharts. The app features real-time alerts using React Toastify and React Hot Toast, and offers a smooth, responsive UI with react-icons and emoji support via emoji-picker-react. Axios handles all API communications, while Moment.js ensures accurate and readable date formatting.`,
        images: [user_login, dashboard, dashboard_chart, income, income_chart, expense, expense_chart],
        github: "https://github.com/tanish0209/expense-tracker",
        links: [{ label: "Live Demo", url: "https://expense-tracker-rkt3.onrender.com/dashboard" }]
    },
    EazyQuizz: {
        name: "EazyQuizz",
        tech: ["React", "TypeScript", "Supabase"],
        desc: `EazyQuizz is a collaborative project developed using TypeScript, React, Tailwind CSS, and Supabase for authentication and database management. Built for a GDG Hackathon, it allows teachers to create quizzes and provides students with real-time AI-powered feedback and explanations through a chatbot integrated with the Gemini API. The app includes performance analytics to help students track progress and improve their accuracy over time.`,
        images: [Landing, Login, student_analytics, student_dashboard, student_insights, teacher_dashboard, teacher_analytics, teacher_create, teacher_quizzes],
        github: "https://github.com/Arora-Jashith/GDG-EAZYQUIZZ",
        links: [{ label: "Live Demo", url: "https://gdg-eazyquizz.vercel.app/" }]
    },
    HealthiMe: {
        name: "HealthiMe",
        tech: ["React.js", "JavaScript", "MongoDB", "Node.js", "Express.js"],
        desc: `HealthiMe is a full-stack medical appointment booking app featuring three dedicated dashboards for Patients, Doctors, and Admin. Built using React, Tailwind CSS, React Toastify, and backend tools like JWT, bcryptjs, multer, Cloudinary, and validator, it ensures secure and smooth user interactions. The app supports role-specific workflows—patients can book consultations, doctors can accept/reject appointments, and admins manage doctor profiles and availability. With proper CORS handling and authentication in place, HealthiMe enabled 100+ patients to successfully schedule and manage consultations.`,
        images: [admin_appointments, admin_doctors, admin_landing, hero, user_appointments, user_doctors, user_landing],
        github: "https://github.com/tanish0209/HealthiMe",
        links: [
            { label: "User Demo", url: "https://healthime-frontend.onrender.com" },
            { label: "Admin Panel", url: "https://healthime-admin.onrender.com" }
        ]
    },
    Enactus: {
        name: "Enactus BVCOE Website",
        tech: ["React.js"],
        desc: `Enactus BVCOE Website is the official website of a college-based social entrepreneurship society, developed using React.js and Tailwind CSS. It features over 5 interactive sections that highlight the team's projects, events, and impact stories. Designed to enhance the society's digital presence, the site boosted user engagement by 40%. Tailwind's utility-first classes enabled rapid prototyping and ensured a clean, consistent, and modern design throughout.`,
        images: [enactus_hero],
        github: "https://github.com/tanish0209/Enactus-website-1.0",
        links: [{ label: "Live", url: "https://enactus-bvcoe.vercel.app/" }]
    },


}
export default Projects;