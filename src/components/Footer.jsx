import { Button } from "@material-tailwind/react";
import logo from "../assets/logoAgora.png";
import Atajos from "./Atajos";
import {BiRightTopArrowCircle} from "react-icons/bi";
import Switch from './Switch'
import Redes from "./Redes";

const Footer = () => {
  return (
    <div className=" mx-6 mt-16 mb-0 md:mt-28 md:mx-28 lg:flex lg:justify-between lg:items-start">
      <div>
        <img src={logo} alt="Logo Agora" className=" w-40" />
        <p className=" text-xs mt-10 lg:w-64 lg:mt-40">
          Agora Partnerships® All Rights Reserved.Reg. U.S. Pat. and TM Off
          Política de Privacidad
        </p>
      </div>
      <Atajos />
      <div>
        <Button className="rounded-full h-8 py-0 mt-6 w-28 bg-[#C1285D] capitalize text-base font-medium lg:mt-0 lg:h-6 lg:w-24">
          Donar
        </Button>
        <div className="flex lg:justify-end my-7 gap-3 text-[#0e1a2b] md:items-center">
          <p className=" font-bold md:text-sm">Suscribirme al newsletter</p>
          <BiRightTopArrowCircle className=" text-2xl md:text-xl" />
        </div>
        <Switch />
      </div>
      <div>
        <Redes/>
      </div>
    </div>
  );
};

export default Footer;
