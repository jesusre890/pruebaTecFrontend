import { BiRightTopArrowCircle } from "react-icons/bi";
import "aos/dist/aos.css";
import { useEffect } from "react";
import AOS from "aos";

const Impacto = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  });
  return (
    <div
      data-aos="fade-up"
      className=" px-6 pt-12 mt-24 rounded-xl md:mt-28 bg-[#19417F] lg:py-20 lg:pt-28"
      id="impacto"
    >
      <div className=" md:flex md:justify-between mb-16 lg:mb-0">
        <div className="flex flex-col lg:flex-row lg:items-center lg:m-auto lg:gap-32">
          <div>
            <h1 className="text-3xl font-semibold text-[#ffffff] md:text-3xl">
              Impacto
            </h1>
            <p className="text-white mt-5 font-light md:w-96">
              Nos comprometemos a la transparencia con los emprendedores y el
              ecosistema emprendedor en Latinoamérica alineándonos con los
              Objetivos de Desarrollo Sostenible de las Naciones Unidas.
            </p>
            <div className="flex text-center gap-3 text-white font-bold mt-10 mb-14 lg:mb-4">
              <p>Ver más </p>
              <BiRightTopArrowCircle className=" text-2xl" />
            </div>
          </div>
          <section className=" pb-16 flex flex-col gap-5 md:flex-row lg:pb-5">
            <div className=" bg-white rounded-xl text-center py-12">
              <p className=" text-4xl text-[#19417F] font-bold lg:text-3xl">
                2,300
              </p>
              <p className="text-[#19417F] font-medium lg:text-sm lg:mx-3">
                Emprendedores atendidos
              </p>
            </div>
            <div className=" bg-white rounded-xl text-center py-12">
              <p className=" text-4xl text-[#19417F] font-bold lg:text-3xl">
                329
              </p>
              <p className="text-[#19417F] font-medium lg:text-sm lg:mx-3">
                Catalizadores capacitados
              </p>
            </div>
            <div className=" bg-white rounded-xl text-center py-12">
              <p className=" text-4xl text-[#19417F] font-bold lg:text-3xl">
                23
              </p>
              <p className="text-[#19417F] font-medium lg:text-sm lg:mx-3">
                Países que tenemos incidencia
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Impacto;
