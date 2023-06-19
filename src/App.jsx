import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./index.css";
import SupabaseContent from "./store/modules/databaseReducer";
import Profile from "./pages/Profile";

function App() {
  return (
    <>
      <div>
        <Profile />
        <SupabaseContent />
      </div>
    </>
  );
}

export default App;
