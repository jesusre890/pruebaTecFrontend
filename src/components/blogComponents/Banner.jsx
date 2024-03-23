import blog from "../../assets/blog.jpg";

const Banner = () => {
  return (
    <div className=" mx-6 mt-8 md:mt-28 lg:mt-10">
      <div className="flex flex-col lg:flex-row lg:gap-4 lg:justify-center">
        <div className="bg-[#19417F] text-white px-8 py-8 lg:px-20 lg:py-24 rounded-2xl">
          <p className=" text-sm mb-5">NUESTRO BLOG</p>
          <p className=" text-2xl font-semibold lg:text-4xl">
            Conoce nuestro últimos artículos y noticias
          </p>
        </div>
        <div className=" mt-5 rounded-3xl lg:mt-0">
          <img src={blog} alt="blog banner" className="rounded-3xl" />
        </div>
      </div>
      <div className=" bg-gray-800 text-white mt-6 p-6 rounded-2xl flex flex-wrap gap-5 justify-center lg:mx-52 lg:text-sm">
        <p>Blog</p>
        <p>Convocatoria Abierta</p>
        <p>Oportunidad Laboral</p>
        <p>Programa</p>
        <p>Programas ejecutados</p>
        <p>Programa en ejecución</p>
        <p>Sala de prensa</p>
        <p className=" underline">Todos</p>
      </div>
    </div>
  );
};

export default Banner;
