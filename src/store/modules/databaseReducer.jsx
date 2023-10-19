import React, { useEffect, useState } from "react";
import supabase from "../../../supabase";
import Profile from "../../pages/Profile";
import WordpressLogo from "../../assets/wordpress_logo.svg";
import FileZillaLogo from "../../assets/FileZilla_logo.svg.png";
import FlywheelLogo from "../../assets/flywheel_logo.svg";
import PHPLogo from "../../assets/PHP-logo.svg.png";
import HTMLLogo from "../../assets/HTML5_logo_and_wordmark.svg.png";
import CSSLogo from "../../assets/CSS3_logo_and_wordmark.svg.png";
import TailwindCSSLogo from "../../assets/Tailwind_CSS_logo.svg.png";
import woocommerceLogo from "../../assets/woo-logo.png";
import ViteLogo from "../../assets/vite.svg";
import ReactLogo from "../../assets/react.svg";
import HeadlessWordPressCMSLogo from "../../assets/HeadlessWordpress.psd.svg";
import vanillaJSLogo from "../../assets/JavaScript-Logo.svg";
import wpPluginsLogo from "../../assets/wordpressplugins.psd.svg";

const SupabaseContent = ({ currentLanguage, switchLanguage }) => {
  const [projects, setProjects] = useState([]);
  const [showLongSummary, setShowLongSummary] = useState(false);
  const [showProjects, setShowProjects] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const { data, error } = await supabase.from("Portfolio_data").select("*");

      if (error) {
        console.error("Error fetching data:", error);
      } else {
        setProjects(data || []);
      }
    }

    fetchData();
  }, []);

  const technologyIcons = {
    Wordpress: WordpressLogo,
    FileZilla: FileZillaLogo,
    Flywheel: FlywheelLogo,
    PHP: PHPLogo,
    HTML: HTMLLogo,
    CSS: CSSLogo,
    TailwindCSS: TailwindCSSLogo,
    woocommerce: woocommerceLogo,
    Vite: ViteLogo,
    React: ReactLogo,
    "Headless WordPress CMS": HeadlessWordPressCMSLogo,
    "vanilla JS": vanillaJSLogo,
    "wp plugins": wpPluginsLogo,
  };
  /*
  const technologyIcons = {
    Wordpress: "./src/assets/wordpress_logo.svg",
    FileZilla: "./src/assets/FileZilla_logo.svg.png",
    Flywheel: "./src/assets/flywheel_logo.svg",
    PHP: "./src/assets/PHP-logo.svg.png",
    HTML: "./src/assets/HTML5_logo_and_wordmark.svg.png",
    CSS: "./src/assets/CSS3_logo_and_wordmark.svg.png",
    TailwindCSS: "./src/assets/Tailwind_CSS_logo.svg.png",
    woocommerce: "./src/assets/woo-logo.png",
    Vite: "./src/assets/vite.svg",
    React: "./src/assets/react.svg",
    "Headless WordPress CMS": "./src/assets/HeadlessWordpress.psd.svg",
    "vanilla JS": "./src/assets/JavaScript-Logo.svg",
    "wp plugins": "./src/assets/wordpressplugins.psd.svg",
  };
*/

  const toggleSummary = () => {
    setShowLongSummary((prevState) => !prevState);
  };

  const toggleProjects = () => {
    setShowProjects((prevState) => !prevState);
  };

  const techStack = Array.from(
    new Set(
      projects.flatMap((project) =>
        project.tech_stack.split(", ").map((technology) => technology.trim())
      )
    )
  );

  return (
    <>
      <div className="container">
        <div className="mt-6">
          <div className="font-extrabold mt-2 md:w-1/2 flex">
            {techStack.map((technology, index) => {
              const icon = technologyIcons[technology];

              return (
                <div className="inline-flex place-items-baseline  ">
                  <img
                    key={index}
                    src={icon}
                    alt={`${technology}`}
                    className="h-10 m-3 inline-block"
                  />{" "}
                  <p className="hidden">{technology}</p>
                </div>
              );
            })}
          </div>
        </div>

        <>
          <p id="projects" className="text-center text-2xl mt-4">
            Projects:
          </p>
          {projects.map((project, index) => (
            <div key={project.id}>
              <div
                className={` mt-2 mx-auto  ${
                  index % 2 === 0
                    ? "md:flex md:flex-row md:bg-[#90d6ff8d] md:bg-opacity-10 w-[100%]"
                    : "md:flex md:flex-row-reverse "
                }`}
                style={{
                  backgroundColor: index % 2 === 0 ? "#90d7ff" : "", // Set background color dynamically
                }}
              >
                <div className="container md:flex py-8">
                  <a
                    href={project.deployed_url}
                    target="_blank"
                    rel="noreferrer"
                    className=""
                  >
                    <img
                      src={project.preview_img}
                      alt={`Image for the project ${project.title}`}
                      className="h-auto object-cover p-6 md:p-0 rounded-lg "
                    />
                  </a>

                  <div
                    className={`mx-auto text-sm md:w-1/2 p-6 md:p-8 pt-0 md:pt-4 text-left md:ml-8 rounded-lg ${
                      index % 2 === 0
                        ? "text-[#181415] text-xs bg-[#f8f8f8] "
                        : "text-[#181415]  text-xs bg-[#f8f8f8]"
                    }`}
                  >
                    <p className="p-4 text-xl font-extrabold text-center">
                      {project.title}
                    </p>
                    <div className="mb-4">
                      {showLongSummary ? (
                        currentLanguage === "english" ? (
                          <p>{project.description_english}</p>
                        ) : (
                          <p>{project.description}</p>
                        )
                      ) : currentLanguage === "english" ? (
                        <p>{project.executive_summary_english}</p>
                      ) : (
                        <p>{project.executive_summary}</p>
                      )}
                    </div>
                    <button
                      onClick={toggleSummary}
                      className="border-2 border-gray-600 text-gray-600 bg-slate-50 rounded-md p-2 "
                    >
                      {showLongSummary ? (
                        currentLanguage === "english" ? (
                          <p>Short & sweet</p>
                        ) : (
                          <p>Kort oppsummering</p>
                        )
                      ) : currentLanguage === "english" ? (
                        <p>More details</p>
                      ) : (
                        <p>Mer detaljer</p>
                      )}
                    </button>

                    <p className="font-extrabold text-left mt-2">Tech stack:</p>
                    <div className="font-extrabold text-left mt-2">
                      {project.tech_stack
                        .split(", ")
                        .map((technology, index) => {
                          const icon = technologyIcons[technology.trim()];

                          return (
                            <img
                              key={index}
                              src={icon}
                              alt={`Icon for ${technology}`}
                              className="h-8 m-1 inline-block "
                            />
                          );
                        })}
                    </div>

                    <div className="flex justify-center space-x-4 mt-4">
                      <a
                        href={project.repo_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 text-gray-800 bg-gray-100 rounded-md hover:bg-gray-200 transition duration-300"
                      >
                        <span className="mr-2">Github repo</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-4"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M8 2a1 1 0 0 1 1 1v3.586l2.293-2.293a1 1 0 1 1 1.414 1.414L9.414 9l2.293 2.293a1 1 0 0 1-1.414 1.414L9 10.414V14a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1zm10 8a1 1 0 0 0-1-1h-3.586l2.293-2.293a1 1 0 1 0-1.414-1.414L11 9.586L8.707 7.293a1 1 0 0 0-1.414 1.414L9.586 11H6a1 1 0 0 0 0 2h11a1 1 0 0 0 1-1zm-6 6a1 1 0 0 1-1-1v-3.586l-2.293 2.293a1 1 0 1 1-1.414-1.414L9.414 11l-2.293-2.293a1 1 0 0 1 1.414-1.414L11 10.414V7a1 1 0 1 1 2 0v11a1 1 0 0 1-1 1z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                      <a
                        href={project.deployed_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 transition duration-300"
                      >
                        <span className="mr-2 text-white">Visit Site</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-4"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4 10a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 9a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2V9zm2-7a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V2z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </>
      </div>
    </>
  );
};

export default SupabaseContent;
