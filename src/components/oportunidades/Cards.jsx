import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  CardFooter,
  Button,
} from "@material-tailwind/react";
import con1 from "../../assets/o1.jpg";
import con2 from "../../assets/o2.jpg";
import con3 from "../../assets/o3.jpg";

const Cards = () => {
  return (
    <div className=" mt-16 flex flex-col gap-8 items-center lg:flex-row lg:items-start">
      <Card className="mt-6 w-96 shadow-none lg:w-1/2">
        <CardHeader color="blue-gray" className="relative h-56">
          <img src={con1} alt="card-image" />
        </CardHeader>
        <CardBody className=" lg:mb-8">
          <Typography variant="h5" color="blue-gray" className="mb-2 ">
            Diseñador Gráfico Freelance
          </Typography>
          <Typography color="blue-gray" className=" font-medium  lg:text-sm">
            Buscamos un/a Diseñador/a Gráfico con al menos 3 años de experiencia
            en diseño de presentaciones, materiales educativos, brochures, y
            otros materiales asociados a productos educativos digitales.
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Button className="rounded-3xl bg-[#ac4245] text-sm text-center py-1 px-7 font-normal">
            CONOCER MÁS
          </Button>
        </CardFooter>
      </Card>
      <Card className="mt-6 w-96 shadow-none lg:w-1/2">
        <CardHeader color="blue-gray" className="relative h-56">
          <img src={con2} alt="card-image" />
        </CardHeader>
        <CardBody className=" lg:mb-2">
          <Typography variant="h5" color="blue-gray" className="mb-2">
            Data Engineer (Ingeniero/a de Datos)
          </Typography>
          <Typography color="blue-gray" className=" font-medium lg:text-sm">
            Buscamos un/a Data Engineer (Ingeniero de Datos) que contribuya al
            desarrollo, implementación y mantenimiento de un sistema de gestión
            de datos eficiente, eficaz y robusto
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Button className="rounded-3xl bg-[#ac4245] text-sm text-center py-1 px-7 font-normal">
            CONOCER MÁS
          </Button>
        </CardFooter>
      </Card>
      <Card className="mt-6 w-96 shadow-none lg:w-1/2">
        <CardHeader color="blue-gray" className="relative h-56">
          <img src={con3} alt="card-image" />
        </CardHeader>
        <CardBody className=" lg:mb-8">
          <Typography variant="h5" color="blue-gray" className="mb-2">
            Gerente de Alianzas
          </Typography>
          <Typography color="blue-gray" className=" font-medium lg:text-sm">
            Buscamos un/una profesional con experiencia y habilidades en la
            construcción y gestión de alianzas comerciales y estratégicas con
            múltiples tipos de organizaciones
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Button className="rounded-3xl bg-[#ac4245] text-sm text-center py-1 px-7 font-normal">
            CONOCER MÁS
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Cards;
