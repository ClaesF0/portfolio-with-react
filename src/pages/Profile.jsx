import React from "react";
import "../../src/App.css";
//import profileImage from "../assets/NewProjectwithHat.png";
//import profileImage from "../assets/claesfolkestad.jpg";
import profileImage from "../assets/claesfolkestad.png";
import CVClaesFolkestadNorsk from "../assets/Claes_Folkestad_Norsk.pdf";
import CVClaesFolkestadEnglish from "../assets/Claes_Folkestad_English.pdf";

function age() {
  const today = new Date();
  const birthDate = new Date("1988-08-13");
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

function resumeDownloadLanguage() {}

const Profile = ({ currentLanguage }) => {
  return (
    <>
      <div id="about" className="container lg:px-40">
        <div className="image-container block md:flex justify-around md:justify-evenly mx-auto py-6 ">
          <div className="container text-md md:text-xl">
            <p className="font-bold">
              Claes Folkestad, {age()},{" "}
              {currentLanguage === "english"
                ? "Front End Graduate"
                : "nylig uteksaminert Front End Utvikler"}
            </p>
            <br />
            📍{currentLanguage === "english" ? "Oslo, Norway" : "Oslo"} ||{" "}
            <a
              href="https://www.linkedin.com/in/claes-folkestad-824115224/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>{" "}
            |{" "}
            <a
              href="https://github.com/ClaesF0"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            |{" "}
            <a
              href="https://www.linkedin.com/in/claes-folkestad-824115224/details/experience/"
              target="_blank"
              rel="noreferrer"
            >
              {currentLanguage === "english" ? "Resume" : "CV"}
            </a>
            <br />
            <br />
            Front End {""}
            <a
              href="https://www.noroff.no/en/studies/vocational-school/front-end-development"
              target="_blank"
              rel="noreferrer"
            >
              Noroff
            </a>{" "}
            {currentLanguage === "english" ? (
              <>
                2021-23 | Class Captain | 93/100 GPA final year. <br />{" "}
                Pragmatic and creative. Teamplayer and people person.
              </>
            ) : (
              <>
                2021-23 | Klasserepresentant | 93/100 poeng år 2.
                <br />
                Pragmatisk og kreativ lagspiller som er flink med mennesker.
              </>
            )}
            <br /> <br />
            <br /> <br />
          </div>

          <div className="image-overlay"></div>
          <img
            src={profileImage}
            alt="Somewhat crudely cropped picture of Claes smiling, but with an added funny stick-hand raising a simplistic tophat."
            className="profile-image bg-[#90d7ff] w-[200px] md:w-[300px] h-auto mx-auto -z-50"
          />
          <div
            className="text-md sm:text-xl md:text-2xl font-bold sm:text-right md:right-3 md:absolute text-[#90d7ff]"
            style={{ fontFamily: "Consolas" }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default Profile;
