import React from "react";
import linkedin from "../assets/LinkedIn_logo_initials.png";
import github from "../assets/GitHub-logo.png";

const Navbar = () => {
  return (
    <>
      <div className="container text-sm md:text-lg flex justify-between items-center bg-gray-200 h-16 sticky top-0 z-20">
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
                #"
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
            <img style={{ height: "40px" }} src={linkedin} alt="" />
          </a>
        </div>
        <div className="">
          <a
            href="https://www.github.com/claesF0"
            target="_blank"
            rel="noreferrer"
          >
            <img style={{ height: "40px" }} src={github} alt="" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
