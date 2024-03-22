import { BiRightTopArrowCircle } from "react-icons/bi";
import Cards from "./Cards";

const QueHacemos = () => {
  return (
    <div className=" mx-6 mt-16 md:mt-28 md:mx-28" id="quienes">
      <div className=" md:flex md:justify-between">
        <div>
          <h1 className="text-3xl font-semibold text-[#2b4875] md:text-2xl">
            ¿Qué hacemos?
          </h1>
          <p className=" mt-4 text-[#0e1a2b] text-base md:max-w-xl md:text-xl">
            Calibramos el ecosistema emprendedor de América Latina para crear
            prosperidad inclusiva para el individuo, la empresa, la comunidad y
            el medio ambiente.
          </p>
        </div>
        <div className="flex justify-end my-7 gap-3 text-[#0e1a2b] md:items-center md:-mt-20">
          <p className=" font-bold md:text-lg">Conocer más sobre nuestros programas</p>
          <BiRightTopArrowCircle className=" text-2xl" />
        </div>
      </div>
      <Cards />
    </div>
  );
};

export default QueHacemos;
