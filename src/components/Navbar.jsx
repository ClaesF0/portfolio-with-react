import React from "react";
import linkedin from "../assets/LinkedIn_logo_initials.png";
import github from "../assets/GitHub-logo.png";
import { useState } from "react";

const Navbar = ({ currentLanguage, switchLanguage }) => {
  //const [currentLanguage, setCurrentLanguage] = useState(
  //  localStorage.getItem("language") || "norwegian"
  //);
  //
  //const switchLanguage = () => {
  //  const newLanguage =
  //    currentLanguage === "norwegian" ? "english" : "norwegian";
  //  localStorage.setItem("language", newLanguage);
  //  setCurrentLanguage(newLanguage);
  //};

  return (
    <div className="w-full bg-gray-200 h-16 sticky top-0 z-20">
      <div className="container text-sm md:text-lg flex justify-between items-center h-16 sticky top-0 z-20">
        <div className="">
          <a
            href="
                #about"
          >
            About
          </a>
        </div>
        <div className="">
          <a
            href="
                #projects"
          >
            Projects
          </a>
        </div>
        <div className="">
          <a
            href="
                #contact"
          >
            Contact
          </a>
        </div>
        <div className="">
          <a
            href="
            https://www.linkedin.com/in/claes-folkestad-824115224/"
            target="_blank"
            rel="noreferrer"
          >
            <img style={{ height: "30px" }} src={linkedin} alt="" />
          </a>
        </div>
        <div className="">
          <a
            href="https://www.github.com/claesF0"
            target="_blank"
            rel="noreferrer"
          >
            <img style={{ height: "30px" }} src={github} alt="" />
          </a>
        </div>
        <button className="mx-1" onClick={switchLanguage}>
          {currentLanguage === "english" ? "🇳🇴" : "🇬🇧"}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
