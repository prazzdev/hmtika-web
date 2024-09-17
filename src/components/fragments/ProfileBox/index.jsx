import {
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaRegEnvelope,
} from "react-icons/fa6";
import { BsGlobe, BsInstagram } from "react-icons/bs";

const ProfileBox = ({
  thumb = "default",
  name,
  position,
  email,
  linkedIn,
  github,
  ig,
  web = "#",
}) => {
  return (
    <div className="flex flex-col justify-center bg-gray-100 shadow-md mx-6 my-12 px-8 rounded-md w-full md:w-96 lg:w-80 xl:w-64 text-center">
      <img
        alt=""
        className="flex-shrink-0 dark:bg-gray-500 bg-cover bg-center -mt-12 rounded-full w-24 h-24 self-center"
        src={process.env.NEXT_PUBLIC_FIREBASE_TEAM_PROFILE_URL + thumb}
      />
      <div className="flex-1 my-4">
        <p className="font-semibold text-pgray text-xl leading-snug">{name}</p>
        <p className="text-sgray">{position}</p>
      </div>
      <div className="flex justify-center items-center space-x-3 p-3 border-t-2 text-lg">
        <a
          rel="noopener noreferrer"
          href={"mailto:" + email}
          target="_blank"
          title="Email"
          className="hover:dark:text-gray-800"
        >
          {/* <FaEnvelope /> */}
          <FaRegEnvelope />
          {/* <BsEnvelopeAt /> */}
        </a>
        <a
          rel="noopener noreferrer"
          href={"https://www.linkedin.com/in/" + linkedIn}
          target="_blank"
          title="LinkedIn"
          className="hover:dark:text-gray-800"
        >
          <FaLinkedinIn />
        </a>
        <a
          rel="noopener noreferrer"
          href={"https://www.github.com/" + github}
          target="_blank"
          title="GitHub"
          className="hover:dark:text-gray-800"
        >
          <FaGithub />
        </a>
        <a
          rel="noopener noreferrer"
          href={"https://www.instagram.com/" + ig}
          target="_blank"
          title="Instagram"
          className="hover:text-gray-800"
        >
          {/* <FaInstagram /> */}
          <BsInstagram />
        </a>
        <a
          rel="noopener noreferrer"
          href={web}
          target="_blank"
          title="Instagram"
          className="hover:text-gray-800"
        >
          {/* <TfiWorld /> */}
          <BsGlobe />
        </a>
      </div>
    </div>
  );
};

export default ProfileBox;
