import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Nav from "./Nav.jsx";
import Home from "./Home.jsx";
import AboutMe from "./AboutMe.jsx";
import MyServices from "./MyServices.jsx";
import Blog from "./Blog.jsx";
import Contact from "./Contact.jsx";
import Footer from "./Footer.jsx";
import Projects from "./Projects.jsx";
import Certifications from "./Certifications.jsx";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Toaster position="top-right"/>
    <Nav />
    <Home />
    <AboutMe />
    <MyServices />
    <Certifications/>
    <Blog />
    <Projects/>
    <Contact />
    <Footer/>
  </StrictMode>
);
