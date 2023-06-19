import React from "react";
import "../../src/App.css";

const Profile = () => {
  return (
    <>
      <div className="bg-[#e3634a] w-[full]">
        <p>Profile</p>
        <div className="image-container bg-[#e3634a] flex justify-between backdrop-blur-xl ">
          <div className="text-4xl text-left text-[#90d7ff]">
            <p>Claes Folkestad</p>
          </div>
          <div className="image-overlay"></div>
          <img
            src="./src/assets/NewProjectwithHat.png"
            alt=""
            className="profile-image bg-[#90d7ff] w-[300px] h-auto "
          />
          <div className="text-2xl text-right text-[#90d7ff]">
            <p>Front End</p>
            e<br /> v<br /> e<br /> l<br /> o<br /> p<br /> e<br /> r
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
