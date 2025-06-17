import React from "react";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router";
import Landing from "./pages/Landing";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="min-h-screen bg-[#0D0E0E]">
      <NavBar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact-page" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
