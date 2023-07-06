import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between items-center bg-gray-700 w-full h-16">
        <div className="flex justify-between items-center w-1/2">
          <div className="text-2xl font-bold text-[#90d7ff] ml-4">About</div>
          <div className="text-2xl font-bold text-[#90d7ff] ml-4">Projects</div>
          <div className="text-2xl font-bold text-[#90d7ff] ml-4">Contact</div>
        </div>
        <div className="flex justify-between items-center w-1/2">
          <div className="text-2xl font-bold text-[#90d7ff] mr-4">
            <a
              href="
                https://www.linkedin.com/in/claes-folkestad-0b1b1b1b1/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
          <div className="text-2xl font-bold text-[#90d7ff] mr-4">
            <a
              href="github.com/claesfolkestad"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
          <div className="text-2xl font-bold text-[#90d7ff] mr-4">
            <a
              href="https://www.instagram.com/claesfolkestad/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
