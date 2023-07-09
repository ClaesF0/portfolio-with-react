import React from "react";
import "../../src/App.css";

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

const Profile = () => {
  return (
    <>
      <div className="container ">
        <div className="image-container block md:flex justify-around   mx-auto py-6 ">
          <div
            className="container text-md md:text-xl font-bold"
            style={{ color: "var(--var-black)" }}
          >
            Claes Folkestad, {age()}, Aspiring Developer
            <br />
            Oslo, Norway ||{" "}
            <a
              href="https://www.linkedin.com/in/claes-folkestad-824115224/"
              target="_blank"
              rel="noreferrer"
            >
              <u style={{ color: "var(--var-orange)" }}>LinkedIn</u>
            </a>{" "}
            |{" "}
            <a
              href="https://github.com/ClaesF0"
              target="_blank"
              rel="noreferrer"
            >
              <u style={{ color: "var(--var-orange)" }}>GitHub</u>
            </a>
            |{" "}
            <a
              href="https://www.linkedin.com/in/claes-folkestad-824115224/details/experience/"
              target="_blank"
              rel="noreferrer"
            >
              <u style={{ color: "var(--var-orange)" }}>Resume💾</u>
            </a>
            🇬🇧   🇳🇴
            <br />
            <br />
            Front End {""}
            <a
              href="https://www.noroff.no/en/studies/vocational-school/front-end-development"
              target="_blank"
              rel="noreferrer"
            >
              <u style={{ color: "var(--var-orange)" }}>Noroff</u>
            </a>{" "}
            2021-23 | Class Captain | 93/100 GPA final year.
            <br /> Pragmatic and creative. Teamplayer and people person.
            <br /> <br />
            <br /> <br />
          </div>

          <div className="image-overlay"></div>
          <img
            src="./src/assets/NewProjectwithHat.png"
            alt=""
            className="profile-image bg-[#90d7ff] m-2 w-[200px] md:w-[300px] h-auto mx-auto"
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
