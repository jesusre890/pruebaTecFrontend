import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import que1 from '../../assets/que1.jpg'
import que2 from '../../assets/que2.jpg'
import que3 from '../../assets/que3.jpg'

const Cards = () => {
  return (
    <div className=" mt-16 flex flex-col gap-8 items-center md:flex-col lg:flex-row lg:items-start lg:justify-around">
      <Card className="mt-6 w-96 shadow-none">
        <CardHeader color="blue-gray" className="relative h-56">
          <img src={que1} alt="card-image" />
        </CardHeader>
        <CardBody className=" hover:bg-[#9C2C4C] rounded-xl text-black hover:text-white mt-5">
          <Typography variant="h5" className="mb-2">
            Emprendimientos y pequeñas empresas en crecimiento
          </Typography>
          <Typography className=" font-medium lg:text-sm">
            Ofrecemos formación empresarial, vinculación a mercados y acceso a
            financiamiento a emprendedores y pequeñas empresas en crecimiento en
            su camino hacia la sostenibilidad económica, social y ambiental.
          </Typography>
        </CardBody>
      </Card>
      <Card className="mt-6 w-96 shadow-none">
        <CardHeader color="blue-gray" className="relative h-56">
          <img src={que2} alt="card-image" />
        </CardHeader>
        <CardBody className=" hover:bg-[#E1552A] rounded-xl text-black hover:text-white mt-5">
          <Typography variant="h5" className="mb-2">
            Ecosistema
          </Typography>
          <Typography className=" font-medium lg:text-sm">
            Contribuimos al fortalecimiento del ecosistema de emprendedores y
            pequeñas empresas en crecimiento a través de eventos, tales como el
            programa Formando Catalizadores, y el co-liderazgo de la Red de
            Impacto, integrada por más de 100 organizaciones de la región.
          </Typography>
        </CardBody>
      </Card>
      <Card className="mt-6 w-96 shadow-none">
        <CardHeader color="blue-gray" className="relative h-56">
          <img src={que3} alt="card-image" />
        </CardHeader>
        <CardBody className=" hover:bg-[#02804C] rounded-xl text-black hover:text-white mt-5">
          <Typography variant="h5" className="mb-2 font-bold">
            Proyectos inclusivos
          </Typography>
          <Typography className=" font-medium lg:text-sm">
            Ejecutamos proyectos específicos junto a aliados con los que
            compartimos nuestra visión por la inclusión financiera, la equidad
            de género, la diversificación, resiliencia y sostenibilidad en las
            cadenas de valor, y la adaptación al cambio climático en la región.
          </Typography>
        </CardBody>
      </Card>
    </div>
  );
};

export default Cards;
