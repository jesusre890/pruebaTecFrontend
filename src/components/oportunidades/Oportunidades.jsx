import { Button } from "@material-tailwind/react";
import Cards from "./Cards";
import "aos/dist/aos.css";
import { useEffect } from "react";
import AOS from "aos";

const Oportunidades = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  });
  return (
    <div
      data-aos="fade-up"
      className=" mx-6 mt-16 md:mt-28 md:mx-28"
      id="sumate"
    >
      <div className=" md:flex md:justify-between">
        <div>
          <h1 className="text-3xl font-semibold text-[#2b4875] md:text-2xl">
            Oportunidades laborales
          </h1>
          <Button className="rounded-3xl bg-[#ac4245] text-sm text-center py-2 px-7 font-normal mt-6 capitalize">
            Conoce todas nuestras vacantes
          </Button>
        </div>
      </div>
      <Cards />
    </div>
  );
};

export default Oportunidades;
