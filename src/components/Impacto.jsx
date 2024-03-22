import { BiRightTopArrowCircle } from "react-icons/bi";

const Impacto = () => {
  return (
    <div className=" px-6 pt-12 mt-24 rounded-xl md:mt-28 md:mx-28 bg-[#19417F]">
      <div className=" md:flex md:justify-between mb-16">
        <div>
          <h1 className="text-3xl font-semibold text-[#ffffff] md:text-3xl">
            Impacto
          </h1>
          <p className="text-white mt-5 font-light">
            Nos comprometemos a la transparencia con los emprendedores y el
            ecosistema emprendedor en Latinoamérica alineándonos con los
            Objetivos de Desarrollo Sostenible de las Naciones Unidas.
          </p>
          <div className="flex text-center gap-3 text-white font-bold mt-10 mb-14">
            <p>Ver más </p>
            <BiRightTopArrowCircle className=" text-2xl" />
          </div>
          <section className=" pb-16 flex flex-col gap-5">
            <div className=" bg-white rounded-xl text-center py-12">
              <p className=" text-4xl text-[#19417F] font-bold">2,300</p>
              <p className="text-[#19417F] font-medium">
                Emprendedores atendidos
              </p>
            </div>
            <div className=" bg-white rounded-xl text-center py-12">
              <p className=" text-4xl text-[#19417F] font-bold">329</p>
              <p className="text-[#19417F] font-medium">
                Catalizadores capacitados
              </p>
            </div>
            <div className=" bg-white rounded-xl text-center py-12">
              <p className=" text-4xl text-[#19417F] font-bold">23</p>
              <p className="text-[#19417F] font-medium">
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
