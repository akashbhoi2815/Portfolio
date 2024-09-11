import { BsGithub, BsLinkedin } from "react-icons/bs";
import instagram from "../assets/instagram.png"
import linkedin from "../assets/linkedin.png"
const SocialMediaIcons = () => {
    return (
      <div className="flex justify-center md:justify-start my-10 gap-7">
        <a
          className="hover:opacity-50 transition duration-500"
          href="https://www.linkedin.com/in/akashbhoi0261/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin className="text-4xl bg-blue"/>
        </a>
        <a
          className="hover:opacity-50 transition duration-500"
          href="https://github.com/akashbhoi2815"
          target="_blank"
          rel="noreferrer"
        >
            <BsGithub className="text-4xl"/>
        </a>
      </div>
    );
  };
  
  export default SocialMediaIcons;