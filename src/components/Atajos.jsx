import {Typography} from "@material-tailwind/react";

const Atajos = () => {
  return (
    <ul className="my-6 flex flex-col items-start gap-0 lg:mb-0 lg:mt-0 lg:items-start lg:gap-1">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a
          href="#quienes"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          Quiénes somos
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a
          href="#programas"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          Programas
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a
          href="#impacto"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          Impacto
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a
          href="#sumate"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          Súmate
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a
          href="#"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          Blog
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a
          href="#recursos"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          Recursos
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a
          href="#sedes"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          Sedes
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a
          href="#"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          Change Lab
        </a>
      </Typography>
    </ul>
  );
}

export default Atajos
