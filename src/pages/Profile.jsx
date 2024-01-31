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
      <div id="about" className="container ">
        <div className="image-container block md:flex justify-between md:justify-between">
          <div className="text-md md:text-xl">
            <p className="font-bold mt-6">
              Claes Folkestad, {age()},{" "}
              {currentLanguage === "english"
                ? "Front End Graduate"
                : "nylig uteksaminert Front End Utvikler"}
            </p>
            <p className="invisible text-xs">
              Pragmatisk og kreativ lagspiller som er flink med mennesker.
            </p>
            <br />
            📍 {currentLanguage === "english" ? "Oslo, Norway" : "Oslo"} |{" "}
            <a
              href="https://www.linkedin.com/in/claes-folkestad-824115224/"
              target="_blank"
              rel="noreferrer"
              className="text-[#38bdf8]"
            >
              LinkedIn
            </a>{" "}
            |{" "}
            <a
              href="https://github.com/ClaesF0"
              target="_blank"
              rel="noreferrer"
              className="text-[#38bdf8]"
            >
              GitHub
            </a>{" "}
            |{" "}
            <a
              href="https://www.linkedin.com/in/claes-folkestad-824115224/details/experience/"
              target="_blank"
              rel="noreferrer"
              className="text-[#38bdf8]"
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
              className="text-[#38bdf8]"
            >
              Noroff
            </a>{" "}
            {currentLanguage === "english" ? (
              <>
                2021-23 | Class Captain | 93/100 GPA final year. <br />{" "}
                Pragmatic and creative. Teamplayer and people person.
                <br />
                <br />
                <p className="text-xs">
                  Bored at work? Made a minigame recently, its on the bottom of
                  the page! ^^
                </p>
              </>
            ) : (
              <>
                2021-23 | Klasserepresentant | 93/100 poeng år 2.
                <br />
                Pragmatisk og kreativ lagspiller som er flink med mennesker.
                <br />
                <br />
                <p className="text-xs">
                  Hvis du kjeder deg på jobb har jeg lagd et spill som ligger
                  nederst på sida! ^^
                </p>
              </>
            )}
          </div>

          <img
            src={profileImage}
            alt=""
            className="profile-image w-[200px] md:w-[300px] h-auto -z-50 md:mr-8 mt-0 md:mt-8 mx-auto"
          />
        </div>
        <div className="stats-overview-images  ">
          <div className="flex flex-wrap justify-between">
            <div className="flex flex-col justify-center items-center">
              <img
                src="https://github-readme-stats.vercel.app/api?username=ClaesF0&theme=default&show_icons=true&hide_border=true&count_private=true"
                alt=""
                className="h-30"
              />
            </div>
            <div className="flex flex-col justify-center items-center">
              <img
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=ClaesF0&theme=default&show_icons=true&hide_border=true&layout=compact"
                alt=""
                className="h-[195px]"
              />
            </div>
            <div className="flex flex-col justify-center items-center">
              <img
                src="https://github-readme-streak-stats.herokuapp.com/?user=ClaesF0&theme=default&hide_border=true "
                alt=""
                className="h-30"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
