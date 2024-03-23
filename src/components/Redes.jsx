import {FaFacebook} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";
import {FaMedium} from "react-icons/fa";
import {FaSpotify} from "react-icons/fa";
import {FaLinkedin} from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Redes = () => {
  return (
    <div className=" my-12 flex flex-col gap-6 lg:mt-0">
      <div className="flex items-end gap-6">
        <FaFacebook className=" text-2xl" />
        <FaInstagram className=" text-2xl" />
        <FaMedium className=" text-2xl" />
      </div>
      <div className="flex items-end gap-6 lg:mb-36">
        <FaLinkedin className=" text-2xl" />
        <FaSpotify className=" text-2xl" />
        <FaYoutube className=" text-2xl" />
      </div>
      <p className="text-sm lg:text-xs">info@agora2030.org</p>
    </div>
  );
};

export default Redes;
