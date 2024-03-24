import CarrouselFinan from "./CarrouselFinan";
import "aos/dist/aos.css";
import { useEffect } from "react";
import AOS from "aos";

const Financiadores = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  });
  return (
    <div data-aos="fade-up" className=" mx-6 mt-16 md:mt-28 md:mx-28">
      <div className=" md:flex md:justify-between mb-16">
        <div>
          <h1 className="text-3xl font-semibold text-[#2b4875] md:text-3xl">
            Nuestros Financiadores
          </h1>
        </div>
      </div>
      <CarrouselFinan />
    </div>
  );
};

export default Financiadores;
