import React, { useEffect, useState } from "react";
import supabase from "../../../supabase";

const SupabaseContent = () => {
  const [projects, setProjects] = useState([]);

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
  return (
    <>
      {projects.map((project, index) => (
        <div key={project.id}>
          <p className="text-xl">{project.title}</p>
          <div
            className={`my-4 mx-auto md:flex ${
              index % 2 === 0 ? "md:flex-row " : "md:flex-row-reverse"
            }`}
          >
            <img
              src={project.preview_img}
              alt={`Image for the project ${project.title}`}
              className="md:w-1/2 h-auto"
            />
            <div className="text-sm md:w-1/2 pb-2 px-2 text-left">
              <p>{project.executive_summary}</p>
              Tech used:
              <p>{project.tech_stack}</p>
              <span className="inline-flex p-1">
                <a href={project.repo_url} target="_blank" rel="noreferrer">
                  <img
                    src=".\src\assets\github.svg"
                    alt={`Code for the project ${project.title}`}
                    className="w-6"
                  />
                </a>
                <a href={project.deployed_url} target="_blank" rel="noreferrer">
                  <img
                    src=".\src\assets\globe-solid.svg"
                    alt={`Site for the project ${project.title}`}
                    className="w-6"
                  />
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
