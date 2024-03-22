import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  CardFooter,
  Button,
} from "@material-tailwind/react";
import con1 from "../../assets/con1.jpg";
import con2 from "../../assets/con2.jpg";
import con3 from "../../assets/con3.jpg";

const Cards = () => {
  return (
    <div className=" mt-16 flex flex-col gap-8 items-center lg:flex-row lg:items-start">
      <Card className="mt-6 w-96 shadow-none">
        <CardHeader color="blue-gray" className="relative h-56">
          <img src={con1} alt="card-image" />
        </CardHeader>
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2 ">
            Programa Juntas Contamos
          </Typography>
          <Typography color="blue-gray" className=" font-medium  lg:text-sm">
            Oportunidad para mujeres empresarias en México, Guatemala, El
            Salvador y Honduras. Juntas Contamos Consta de tres programas
            dirigidos a 3 perfiles diferentes de empresarias.
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Button className="rounded-3xl bg-[#ac4245] text-sm text-center py-1 px-7 font-normal">
            CONOCER MÁS
          </Button>
        </CardFooter>
      </Card>
      <Card className="mt-6 w-96 shadow-none">
        <CardHeader color="blue-gray" className="relative h-56">
          <img src={con3} alt="card-image" />
        </CardHeader>
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            “Alcanzar un equilibrio entre el trabajo y familia uno de los retos
            más importantes al ser empresaria”
          </Typography>
          <Typography color="blue-gray" className=" font-medium lg:text-sm">
            Francis Castillo, fundadora de ‘The Baking Mom’es un gran ejemplo de
            cómo el ser mamá y emprendedora se puede lograr rompiendo paradigmas
            y miedos
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Button className="rounded-3xl bg-[#ac4245] text-sm text-center py-1 px-7 font-normal">
            CONOCER MÁS
          </Button>
        </CardFooter>
      </Card>
      <Card className="mt-6 w-96 shadow-none">
        <CardHeader color="blue-gray" className="relative h-56">
          <img src={con2} alt="card-image" />
        </CardHeader>
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            Transformando a América Latina: Agora Partnerships adquiere
            CreativeLab
          </Typography>
          <Typography color="blue-gray" className=" font-medium lg:text-sm">
            Esta unión no solo representa una evolución en el nombre de la marca
            colombiana a ChangeLab, sino que también establece ambiciosas metas
            para el futuro.
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
