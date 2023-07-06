import { useState } from "react";
import "./App.css";
import "./index.css";
import SupabaseContent from "./store/modules/databaseReducer";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar";
import About from "./pages/Testimonials";

function App() {
  return (
    <>
      <div>
        <Profile />
        <SupabaseContent />
        <About />
      </div>
    </>
  );
}

export default App;
