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
    <div>
      {projects.map((project) => (
        <div key={project.id}>
          <h2>{project.title}</h2>
          {/* Render other project details */}
        </div>
      ))}
    </div>
  );
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
