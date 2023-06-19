import React, { useEffect, useState } from "react";
import supabase from "../../../supabase";

const SupabaseContent = () => {
  const [projects, setProjects] = useState([]);
  const [showLongSummary, setShowLongSummary] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const { data, error } = await supabase.from("Portfolio_data").select("*");
      console.log("supabase fetch ok");
      console.log("data", data);

      if (error) {
        console.error("Error fetching data:", error);
      } else {
        setProjects(data || []);
      }
    }

    fetchData();
  }, []);

  const technologyIcons = {
    Wordpress: "./src/assets/wordpress_logo.svg",
    FileZilla: "./src/assets/FileZilla_logo.svg.png",
    Flywheel: "./src/assets/flywheel_logo.svg",
    PHP: "./src/assets/PHP-logo.svg.png",
    HTML: "./src/assets/HTML5_logo_and_wordmark.svg.png",
    CSS: "./src/assets/CSS3_logo_and_wordmark.svg.png",
    TailwindCSS: "./src/assets/Tailwind_CSS_logo.svg.png",
    woocommerce: "./src/assets/woo-logo.png",
    "Headless WordPress CMS": "./src/assets/HeadlessWordpress.psd.svg",
    "vanilla JS": "./src/assets/JavaScript-Logo.svg",
    "wp plugins": "./src/assets/wordpressplugins.psd.svg",
  };

  const toggleSummary = () => {
    setShowLongSummary((prevState) => !prevState);
  };

  return (
    <>
      <p className="text-2xl mt-4">PROJECTS</p>
      {projects.map((project, index) => (
        <div key={project.id}>
          <p className="text-2xl mt-6">{project.title}</p>
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
                  ? "text-[#f8f8f8] text-xs bg-blue-600"
                  : "text-gray-800  text-xs bg-[#f8f8f8]"
              }`}
            >
              <div className="mb-4">
                <p className="text-center">SUMMARY</p>
                {/* Display the appropriate summary based on showLongSummary state */}
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
                {showLongSummary ? <p>Read less ↑</p> : <p>Read more ↓</p>}
              </button>

              <p className="font-extrabold text-center mt-2">Tech used:</p>
              <div className="font-extrabold text-center mt-2">
                {project.tech_stack.split(", ").map((technology, index) => {
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
              <span className="flex p-1 justify-between w-1/2 mx-auto">
                <a href={project.repo_url} target="_blank" rel="noreferrer">
                  <p
                    className={`${
                      index % 2 === 0 ? "text-[#7fff00]" : "text-blue-700"
                    }`}
                  >
                    Project repo
                  </p>
                </a>
                <a href={project.deployed_url} target="_blank" rel="noreferrer">
                  <p
                    className={`${
                      index % 2 === 0 ? "text-[#7fff00]" : "text-blue-700"
                    }`}
                  >
                    Deployed site
                  </p>
                </a>
              </span>
            </div>
          </div>
        </div>
      ))}
    </>
  );

  //  return (
  //    <>
  //      {projects.map((project) => (
  //        <div key={project.id} className="my-1 mx-auto">
  //          <p className="text-xl">{project.title}</p>
  //          <div className="border-2 border-red-500 block md:inline-flex m-1">
  //            <img
  //              src={project.preview_img}
  //              alt={`Image for the project ${project.title}`}
  //              className="md:w-1/2 h-auto"
  //            />
  //            <div className="text-sm md:w-1/2 pb-2 ">
  //              <p>{project.executive_summary}</p>
  //              Tech used:
  //              <p>{project.tech_stack}</p>
  //              <span className="inline-flex p-1">
  //                <a href={project.repo_url} target="_blank" rel="noreferrer">
  //                  <img
  //                    src=".\src\assets\github.svg"
  //                    alt={`Code for the project ${project.title}`}
  //                    className="w-6"
  //                  />
  //                </a>
  //                <a href={project.deployed_url} target="_blank" rel="noreferrer">
  //                  <img
  //                    src=".\src\assets\globe-solid.svg"
  //                    alt={`Site for the project ${project.title}`}
  //                    className="w-6"
  //                  />
  //                </a>
  //              </span>
  //            </div>
  //          </div>
  //        </div>
  //      ))}
  //    </>
  //  );
};

export default SupabaseContent;

/*
import { createSlice } from "@reduxjs/toolkit/dist/createSlice";
import supabase from "../../../supabase";

//reducers

const databaseSlice = createSlice({
  name: "database",
  initialState: {
    database: [],
  },
  reducers: {
    setSupabaseDatabase: (state, action) => {
      state.database = action.payload;
    },
  },
});

export const { setSupabaseDatabase } = databaseSlice.actions;

export default databaseSlice.reducer;

export const fetchSupabaserDatabase = () => async (dispatch) => {
  const response = await fetch("http://localhost:3001/database");
  const data = await response.json();
  dispatch(setSupabaseDatabase(data));
};
*/
