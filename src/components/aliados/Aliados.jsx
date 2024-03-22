import { BiRightTopArrowCircle } from "react-icons/bi";
import CarrouselAliados from "./CarrouselAliados";

const Aliados = () => {
  return (
    <div className=" mx-6 mt-16 md:mt-28 md:mx-28">
      <div className=" md:flex md:justify-between mb-16">
        <div>
          <h1 className="text-3xl font-semibold text-[#2b4875] md:text-3xl">
            Nuestros aliados
          </h1>
          <p className=" mt-4 text-[#0e1a2b] text-base md:max-w-xl md:text-base">
            Conoce a las organizaciones que nos acompañan por una sociedad más
            inclusiva y en sintonía con el ambiente.
          </p>
          <p className=" mt-4 text-[#0e1a2b] text-base md:max-w-xl md:text-base">
            Contáctate para conocer más sobre cómo colaborar con Agora
            Partnerships.
          </p>
        </div>
        <div className="flex lg:justify-end my-7 gap-3 text-[#0e1a2b] md:items-center md:-mt-20">
          <p className=" font-bold md:text-sm">
            Súmate como aliado
          </p>
          <BiRightTopArrowCircle className=" text-2xl md:text-xl" />
        </div>
      </div>
      <CarrouselAliados/>
    </div>
  );
};

export default Aliados;
