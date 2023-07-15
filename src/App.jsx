import { useState } from "react";
import "./App.css";
import "./index.css";
import SupabaseContent from "./store/modules/databaseReducer";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar";
import About from "./pages/Testimonials";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Profile />
        <SupabaseContent />
        <About />
        <Contact />
      </div>
    </>
  );
}

export default App;
