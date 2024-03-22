import { BiRightTopArrowCircle } from "react-icons/bi";
import Cards from "./Cards";

const QueHacemos = () => {
  return (
    <div className=" mx-6 mt-16">
      <div>
        <h1 className="text-3xl font-semibold text-[#1b2f50]">¿Qué hacemos?</h1>
        <p className=" mt-4 text-[#0e1a2b] text-base">
          Calibramos el ecosistema emprendedor de América Latina para crear
          prosperidad inclusiva para el individuo, la empresa, la comunidad y el
          medio ambiente.
        </p>
      </div>
      <div className="flex justify-end my-7 gap-3 text-[#0e1a2b]">
        <p className=" font-bold">
          Conocer más sobre nuestros programas
        </p>
        <BiRightTopArrowCircle className=" text-2xl" />
      </div>
      <Cards/>
    </div>
  );
};

export default QueHacemos;
