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
import Figmalogo from "../../assets/Figmalogo.png";
import Wixlogo from "../../assets/wixlogo.png";

const SupabaseContent = ({ currentLanguage, switchLanguage }) => {
  const [projects, setProjects] = useState([]);
  const [showLongSummary, setShowLongSummary] = useState(false);
  const [showProjects, setShowProjects] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const { data, error } = await supabase
        .from("Portfolio_data")
        .select("*")
        .order("appearance", { ascending: false });

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
    Figma: Figmalogo,
    Wix: Wixlogo,
  };

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
          <div className="font-extrabold mt-2 flex flex-wrap justify-center md:justify-between">
            {techStack.map((technology, index) => {
              const icon = technologyIcons[technology];

              return (
                <div className="flex items-center m-1 ">
                  <img
                    key={index}
                    src={icon}
                    alt={`${technology}`}
                    className="h-8 p-1 md:h-10"
                  />{" "}
                  <p className="hidden">{technology}</p>
                </div>
              );
            })}
          </div>
        </div>

        <>
          {projects.map((project, index) => (
            <div key={project.id}>
              <div className="my-12">
                <div
                  className={` my-12 md:flex justify-evenly ${
                    index % 2 === 0 ? " md:flex-row-reverse" : " md:flex-row"
                  }`}
                >
                  <a
                    href={project.deployed_url}
                    target="_blank"
                    rel="noreferrer"
                    className=""
                  >
                    <img
                      src={project.preview_img}
                      alt={`Image for the project ${project.title}`}
                      className="w-full object-cover md:p-0 rounded-lg "
                    />
                  </a>

                  <div
                    className={` mx-auto text-sm md:w-1/2 py-6  pt-0 text-left rounded-lg  ${
                      index % 2 === 0 ? " md:pr-8" : "  md:px-8"
                    }`}
                  >
                    {" "}
                    <a
                      href={project.deployed_url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[#0000EE]"
                    >
                      <p className="pb-2 text-xl font-extrabold ">
                        {project.title}
                      </p>
                    </a>
                    <div className="text-left mt-2">
                      {project.tech_stack
                        .split(", ")
                        .map((technology, index) => {
                          const icon = technologyIcons[technology.trim()];

                          return (
                            <img
                              key={index}
                              src={icon}
                              alt={`Icon for ${technology}`}
                              className="h-8 px-1 inline-block "
                            />
                          );
                        })}
                    </div>
                    <div className="space-x-2 my-2">
                      <a
                        href={project.repo_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className=" text-[#0000EE] "
                      >
                        <span className="mr-2">Github repo</span>
                      </a>
                      <a
                        href={project.deployed_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#0000EE]"
                      >
                        <span className="mr-2">Deployed Site</span>
                      </a>
                    </div>
                    <div className="mb-4 w-full">
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
                      className=" text-gray-600 font-semibold py-1 hover:italic"
                    >
                      {showLongSummary ? (
                        currentLanguage === "english" ? (
                          <p>Short summary</p>
                        ) : (
                          <p>Kort oppsummering</p>
                        )
                      ) : currentLanguage === "english" ? (
                        <p>More details?</p>
                      ) : (
                        <p>Mer detaljer?</p>
                      )}
                    </button>
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
