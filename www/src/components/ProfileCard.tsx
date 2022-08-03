import ImgOfMe from "../assets/me_image.jpg";

const ProfileCard = ({ children }) => (
  <div className="my-6 flex md:flex-row w-full flex-col-reverse">
    <div className="md:w-1/2 max-w-lg w-full">
      {/* Fix the image here */}
      <img
        placeholder="blur"
        priority
        sizes="(min-width: 0px) 500px"
        layout="responsive"
        width="500"
        height="500"
        src={ImgOfMe}
        alt="Picture of me"
      />
    </div>
    <div className="flex flex-row-reverse md:flex-col-reverse px-0 md:px-5 w-full">
      <h3 className="font-sans">{children}</h3>
    </div>
  </div>
);

export default ProfileCard;
