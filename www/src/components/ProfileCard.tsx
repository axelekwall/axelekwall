import React from "react";

const ProfileCard = ({ children }) => (
  <div className="my-6 flex sm:flex-row w-full flex-col-reverse">
    <div className="sm:w-1/2 max-w-lg w-full">
      <img
        className="w-full h-full object-cover object-center m-0"
        src="/media/me_image.jpg"
        alt="Picture of me"
      />
    </div>
    <div className="flex flex-row-reverse sm:flex-col-reverse px-0 sm:px-5 w-full">
      <h3 className="font-sans">{children}</h3>
    </div>
  </div>
);

export default ProfileCard;
