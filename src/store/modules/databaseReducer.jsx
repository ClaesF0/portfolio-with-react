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

const SupabaseContent = () => {
  const [projects, setProjects] = useState([]);
  const [showLongSummary, setShowLongSummary] = useState(false);
  const [showProjects, setShowProjects] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const { data, error } = await supabase.from("Portfolio_data").select("*");
      console.log("supabase projects fetch ok");
      console.log("data kommer under");
      console.log(data);
      console.log("hei dette er en string text");

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
      <div className="full-width-container">
        <div className="mt-6">
          <p className="font-extrabold text-center">Tech Stack:</p>

          <div className="font-extrabold text-center mt-2">
            {techStack.map((technology, index) => {
              const icon = technologyIcons[technology];

              return (
                <img
                  key={index}
                  src={icon}
                  alt={`${technology}`}
                  className="h-8 m-1 inline-block"
                />
              );
            })}
          </div>
        </div>

        <button
          onClick={toggleProjects}
          className="text-2xl mt-4 w-full text-gray-700 bg-[#90d7ff] py-2"
        >
          {showProjects ? (
            <p className="text-2xl">Projects ▲</p>
          ) : (
            <p className="text-2xl">Projects ▼</p>
          )}
        </button>
        {showProjects && (
          <>
            {projects.map((project, index) => (
              <div key={project.id}>
                <p className="text-2xl mt-6 text-center">{project.title}</p>
                <div
                  className={`mt-2 mx-auto md:flex ${
                    index % 2 === 0 ? "md:flex-row " : "md:flex-row-reverse"
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
                      className="h-auto object-cover"
                    />
                  </a>

                  <div
                    className={`mx-auto text-sm md:w-1/2 p-6 text-left ${
                      index % 2 === 0
                        ? "text-[#181415] text-xs bg-[#f8f8f8] md:bg-[#90d7ff]"
                        : "text-[#181415]  text-xs bg-[#f8f8f8]"
                    }`}
                  >
                    <div className="mb-4">
                      <p className="text-center">SUMMARY</p>
                      {showLongSummary ? (
                        <p>{project.description}</p>
                      ) : (
                        <p>{project.executive_summary}</p>
                      )}
                    </div>
                    <button
                      onClick={toggleSummary}
                      className="border-2 border-gray-600 text-gray-600 bg-slate-50 rounded-md p-2 "
                    >
                      {showLongSummary ? (
                        <p>Read less ↑</p>
                      ) : (
                        <p>Read more ↓</p>
                      )}
                    </button>

                    <p className="font-extrabold text-center mt-2">
                      Tech used:
                    </p>
                    <div className="font-extrabold text-center mt-2">
                      {project.tech_stack
                        .split(", ")
                        .map((technology, index) => {
                          const icon = technologyIcons[technology.trim()];

                          return (
                            <img
                              key={index}
                              src={icon}
                              alt={`Icon for ${technology}`}
                              className="h-8 m-1 inline-block"
                            />
                          );
                        })}
                    </div>
                    <span className="flex p-1 justify-between w-1/2 mx-auto ">
                      <a
                        href={project.repo_url}
                        target="_blank"
                        rel="noreferrer"
                        className="border-2 border-gray-600 text-gray-600 bg-slate-50 rounded-md p-2 "
                      >
                        <p
                          className={`${
                            index % 2 === 0 ? "text-blue-700" : "text-gray-600"
                          }`}
                        >
                          Repo
                        </p>
                      </a>
                      <a
                        href={project.deployed_url}
                        target="_blank"
                        rel="noreferrer"
                        className="border-2 border-gray-600 text-gray-600 bg-slate-50 rounded-md p-2 "
                      >
                        <p
                          className={`${
                            index % 2 === 0 ? "text-blue-700" : "text-gray-600"
                          }`}
                        >
                          Site
                        </p>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </>
  );
};

export default SupabaseContent;
