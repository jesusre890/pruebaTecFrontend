import Cards from "./Cards";
import "aos/dist/aos.css";
import { useEffect } from "react";
import AOS from "aos";

const Convocatorias = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  });
  return (
    <div
      data-aos="fade-up"
      className=" mx-6 mt-16 md:mt-28 md:mx-28"
      id="programas"
    >
      <h1 className="text-3xl font-semibold text-[#2b4875] md:text-3xl">
        Convocatorias abiertas y novedades
      </h1>
      <Cards />
    </div>
  );
};

export default Convocatorias;
