import React, { useState, useEffect } from "react";
import Nav from "./Nav.jsx";
import Home from "./Home.jsx";
import AboutMe from "./AboutMe.jsx";
import MyServices from "./MyServices.jsx";
import Blog from "./Blog.jsx";
import Contact from "./Contact.jsx";
import Footer from "./Footer.jsx";
import Projects from "./Projects.jsx";
import Certifications from "./Certifications.jsx";
import CaseStudyPage from "./components/CaseStudyPage.jsx";
import { projectsData } from "./data/projectsData";

export const App = () => {
  const [selectedProjectId, setSelectedProjectId] = useState(() => {
    // Check if the URL has a case study hash e.g. #case-study/terraform-aws-architecture
    const hash = window.location.hash;
    if (hash.startsWith("#case-study/")) {
      return hash.replace("#case-study/", "");
    }
    return null;
  });

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith("#case-study/")) {
        setSelectedProjectId(hash.replace("#case-study/", ""));
      } else if (selectedProjectId) {
        setSelectedProjectId(null);
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [selectedProjectId]);

  const activeProject = projectsData.find((p) => p.id === selectedProjectId);

  const handleOpenCaseStudy = (project) => {
    window.location.hash = `case-study/${project.id}`;
    setSelectedProjectId(project.id);
  };

  const handleBackToHome = () => {
    window.location.hash = "projects";
    setSelectedProjectId(null);
  };

  if (activeProject) {
    return (
      <CaseStudyPage
        project={activeProject}
        onBack={handleBackToHome}
      />
    );
  }

  return (
    <>
      <Nav />
      <Home />
      <AboutMe />
      <MyServices />
      <Certifications />
      <Blog />
      <Projects onSelectProject={handleOpenCaseStudy} />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
