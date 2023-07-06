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
      <div className=" ">
        <div className="image-container bg-gray-700 block md:flex justify-evenly  mx-auto py-6">
          <div
            className="full-width-container text-md md:text-2xl font-bold text-[#90d7ff]"
            style={{ fontFamily: "Consolas" }}
          >
            Claes Folkestad, {age()} years old.
            <br /> Oslo based aspiring Frontend Developer.
            <br />
            <a
              href="https://www.noroff.no/en/studies/vocational-school/front-end-development"
              target="_blank"
              rel="noreferrer"
            >
              <u>Noroff</u>
            </a>{" "}
            class of 2023, class captain. 93/100 GPA final year.
            <br /> Pragmatic and creative. Teamplayer and people person.
            <br /> <br />
            RESUME
            <br /> <br />
            <a
              href="https://www.linkedin.com/in/claes-folkestad-824115224/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <br /> <br />
            <a
              href="https://github.com/ClaesF0"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
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
