import React from "react";
import linkedin from "../assets/LinkedIn_logo_initials.png";
import github from "../assets/GitHub-logo.svg";
import { useState } from "react";
import Hamburger from "./Hamburger";
import resume from "../assets/Claes-CV-v4.pdf";

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

  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  return (
    <div className=" w-full h-16 sticky top-0 z-10 text-[#38bdf8]  ">
      <div
        className={`hambar ${
          hamburgerOpen
            ? "container text-2xl justify-between items-center  h-16 sticky top-0  bg-[#f8f8f8] "
            : "md:flex justify-evenly bg-[#f8f8f8] "
        } `}
      >
        <ul
          className={`${
            hamburgerOpen ? "block" : "hidden"
          } container md:flex flex-wrap justify-between text-xl md:w-screen h-1/2 top-8 border-b-2 py-4 border-black`}
        >
          <li className="">
            <a
              href="
                #about"
              onClick={window.innerWidth <= 768 ? toggleHamburger : null}
            >
              {currentLanguage === "english" ? "About" : "Om meg"}
            </a>
          </li>
          <li className="">
            <a
              href="
                #projects"
              onClick={window.innerWidth <= 768 ? toggleHamburger : null}
            >
              {currentLanguage === "english" ? "Projects" : "Prosjekter"}
            </a>
          </li>
          <li className="">
            <a
              href="
                #references"
              onClick={window.innerWidth <= 768 ? toggleHamburger : null}
            >
              {currentLanguage === "english" ? "Testimonials" : "Referanser"}
            </a>
          </li>
          <li className="">
            <a
              href="
                #contact"
              onClick={window.innerWidth <= 768 ? toggleHamburger : null}
            >
              {currentLanguage === "english" ? "Contact me" : "Ta kontakt"}
            </a>
          </li>
          <li className="">
            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              onClick={window.innerWidth <= 768 ? toggleHamburger : null}
            >
              {currentLanguage === "english" ? "Resume" : "CV"}
            </a>
          </li>
          <li className="">
            <a
              href="
            https://www.linkedin.com/in/claes-folkestad-824115224/"
              target="_blank"
              rel="noreferrer"
              onClick={window.innerWidth <= 768 ? toggleHamburger : null}
            >
              <img style={{ width: "30px" }} src={linkedin} alt="" />
            </a>
          </li>
          <li className="">
            <a
              href="https://www.github.com/claesF0"
              target="_blank"
              rel="noreferrer"
              onClick={window.innerWidth <= 768 ? toggleHamburger : null}
            >
              <img style={{ height: "30px" }} src={github} alt="" />
            </a>
          </li>
          <li>
            <button
              className="mx-2 hidden md:relative md:flex md:items-center top-0 right-0 text-2xl"
              onClick={switchLanguage}
            >
              {currentLanguage === "english" ? "🇳🇴" : "🇬🇧"}
            </button>
          </li>
        </ul>

        <div className="hamburger" onClick={toggleHamburger}>
          <Hamburger isOpen={hamburgerOpen} />
        </div>
        <button
          className="mx-2 absolute md:hidden top-0 right-0 text-3xl"
          onClick={switchLanguage}
        >
          {currentLanguage === "english" ? "🇳🇴" : "🇬🇧"}
        </button>
      </div>

      <style jsx>
        {`
          .navbar ul {
            display: ${hamburgerOpen ? "inline" : ""};
          }
        `}
      </style>
    </div>
  );
};

export default Navbar;
