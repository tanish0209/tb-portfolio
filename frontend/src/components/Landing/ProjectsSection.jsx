import React from "react";
import { motion } from "framer-motion";
import arrow from "../../assets/arrow.svg";
import rightup from "../../assets/right-up.png";
import admin_appointments from "../../assets/projects/healthime/admin_appointments.png";
import admin_doctors from "../../assets/projects/healthime/admin_doctors.png";
import hero from "../../assets/projects/healthime/hero.png";
import user_appointments from "../../assets/projects/healthime/user_appointments.png";
import user_doctors from "../../assets/projects/healthime/user_doctors.png";
import admin_landing from "../../assets/projects/healthime/admin_landing.png";
import user_landing from "../../assets/projects/healthime/user_landing.png";
import dashboard_chart from "../../assets/projects/eazytrack/dashboard_chart.png";
import dashboard from "../../assets/projects/eazytrack/dashboard.png";
import expense from "../../assets/projects/eazytrack/expense.png";
import expense_chart from "../../assets/projects/eazytrack/expense_chart.png";
import income from "../../assets/projects/eazytrack/income.png";
import income_chart from "../../assets/projects/eazytrack/income_chart.png";
import user_login from "../../assets/projects/eazytrack/user_login.png";
import Landing from "../../assets/projects/eazyquizz/Landing.png";
import Login from "../../assets/projects/eazyquizz/Login.png";
import student_analytics from "../../assets/projects/eazyquizz/student_analytics.png";
import student_dashboard from "../../assets/projects/eazyquizz/student_dashboard.png";
import student_insights from "../../assets/projects/eazyquizz/student_insights.png";
import teacher_analytics from "../../assets/projects/eazyquizz/teacher_analytics.png";
import teacher_create from "../../assets/projects/eazyquizz/teacher_create.png";
import teacher_dashboard from "../../assets/projects/eazyquizz/teacher_dashboard.png";
import teacher_quizzes from "../../assets/projects/eazyquizz/teacher_quizzes.png";
import ImageSlider from "../Projects/ImageSlider";
import { useNavigate } from "react-router";

const ProjectsSection = () => {
  const navigate = useNavigate();
  const project_healthime = [
    hero,
    user_landing,
    user_doctors,
    user_appointments,
    admin_landing,
    admin_doctors,
    admin_appointments,
  ];
  const project_eazyquizz = [
    Landing,
    Login,
    teacher_dashboard,
    teacher_analytics,
    teacher_quizzes,
    teacher_create,
    student_dashboard,
    student_analytics,
    student_insights,
  ];
  const project_eazytrack = [
    user_login,
    dashboard,
    dashboard_chart,
    income_chart,
    income,
    expense_chart,
    expense,
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };
  return (
    <div className="py-[2vh] px-[5vw]">
      <div className="px-[2vw] py-[4vh] max-w-full">
        <div className="flex flex-wrap justify-between items-center gap-4">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[var(--text-secondary)] text-[clamp(1.5rem,5vw,3.5rem)] font-black"
          >
            My Projects.
          </motion.h2>
          <motion.button
            onClick={() => navigate("/projects")}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="group text-sm sm:text-base bg-[#1e1e1e] px-4 py-2 sm:px-6 sm:py-3 text-[var(--text-primary)] font-bold rounded-xl border border-[#424242] flex items-center gap-2 hover:bg-[var(--text-secondary)] hover:text-black transition-colors duration-300"
          >
            See All Projects
            <img
              src={arrow}
              alt="arrow"
              className="w-4 h-4 sm:w-5 sm:h-5 invert group-hover:invert-0 transition duration-300"
            />
          </motion.button>
        </div>
      </div>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {[
          {
            title: "HealthiMe",
            images: project_healthime,
            navigation: " https://healthime-frontend.onrender.com/",
          },
          {
            title: "EazyQuizz",
            images: project_eazyquizz,
            navigation: "https://gdg-eazyquizz.vercel.app/",
          },
          {
            title: "EazyTrack",
            images: project_eazytrack,
            navigation: "https://expense-tracker-rkt3.onrender.com/dashboard",
          },
        ].map((project, i) => (
          <motion.div
            key={project.title}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
            className="relative w-full max-w-[90vw] sm:max-w-[400px] hover:scale-[1.02] transition-transform duration-500"
          >
            <div className="bg-[#1e1e1e] p-3 sm:p-4 border border-[#424242] rounded-2xl relative overflow-hidden z-0">
              <div className="bg-black rounded-2xl mb-6 overflow-hidden">
                <ImageSlider
                  images={project.images}
                  width="100%"
                  height="105%"
                  aspectRatio="4/3"
                />
              </div>
              <h3 className="text-lime-400 text-3xl sm:text-4xl font-extrabold px-2">
                {project.title}
              </h3>
            </div>
            <div className="absolute w-15 h-15 sm:w-18 sm:h-18 bottom-0 right-0 border border-[#0D0E0E] bg-[#0D0E0E] rounded-t-full rounded-l-full z-20 flex items-center justify-center">
              <button
                onClick={() => window.open(project.navigation, "_blank")}
                className="bg-[var(--text-secondary)] p-2 sm:p-3 rounded-full cursor-pointer transition-transform"
              >
                <img
                  src={rightup}
                  alt="arrow"
                  className="w-5 h-5 sm:w-8 sm:h-8"
                />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
