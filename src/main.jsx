import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Nav from "./Nav.jsx";
import Home from "./Home.jsx";
import AboutMe from "./AboutMe.jsx";
import MyServices from "./MyServices.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Nav />
    <Home />
    <AboutMe />
    <MyServices />
  </StrictMode>
);
