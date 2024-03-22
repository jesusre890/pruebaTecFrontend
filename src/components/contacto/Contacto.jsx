import {
  Card,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";

const Contacto = () => {
  return (
    <div className=" bg-[#333333] py-14 px-6 rounded-xl lg:px-20">
      <Card color="transparent" shadow={false}>
        <Typography variant="h3" color="white" className=" lg:w-80">
          Suscríbete a nuestro newsletter
        </Typography>
        <form className="mt-8 mb-2 w-96 max-w-screen-lg sm:w-96 flex flex-col m-auto lg:w-full">
          <div className="mb-1 flex flex-col gap-3 text-white mr-3 lg:flex-row lg:gap-14">
            <div className="flex flex-col gap-3 lg:w-full">
              <Input variant="static" placeholder="Nombre*" color="white" />
              <Input variant="static" placeholder="Profesión*" color="white" />
              <Input variant="static" placeholder="Apellido*" color="white" />
            </div>
            <div className="flex flex-col gap-3 lg:w-full">
              <Input variant="static" placeholder="Empresa*" color="white" />
              <Input
                variant="static"
                placeholder="Correo Electrónico*"
                color="white"
              />
              <Input variant="static" placeholder="País*" color="white" />
            </div>
          </div>
          <Button className="rounded-full mt-6 w-28 bg-[#C1285D] capitalize text-base font-medium">
            Enviar
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default Contacto;
