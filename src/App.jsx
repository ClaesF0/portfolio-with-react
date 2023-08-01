import { useState } from "react";
import "./App.css";
import "./index.css";
import SupabaseContent from "./store/modules/databaseReducer";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";

const App = () => {
  const [currentLanguage, setCurrentLanguage] = useState(
    localStorage.getItem("language") || "norwegian"
  );

  const switchLanguage = () => {
    const newLanguage =
      currentLanguage === "norwegian" ? "english" : "norwegian";
    localStorage.setItem("language", newLanguage);
    setCurrentLanguage(newLanguage);
  };

  return (
    <>
      <Navbar
        currentLanguage={currentLanguage}
        switchLanguage={switchLanguage}
      />
      <Profile currentLanguage={currentLanguage} />
      <SupabaseContent currentLanguage={currentLanguage} />
      <Testimonials currentLanguage={currentLanguage} />
      <Contact currentLanguage={currentLanguage} />
    </>
  );
};

export default App;
