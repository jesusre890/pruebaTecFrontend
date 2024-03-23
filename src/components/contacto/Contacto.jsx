import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const Contacto = () => {
  const [captchaValido, setCaptchaValido] = useState(null);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const form = useRef();

  const onSubmit = (e) => {
    console.log(e);

    notify();

    emailjs.sendForm(
      "service_ggf6opf",
      "template_oyqlkir",
      form.current,
      "yiAjC4F0tt9JZ_lr1"
    );
  };
  const notify = () => {
    toast.success("Mensaje enviado correctamente!", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <>
      <div className=" bg-[#333333] py-14 px-6 mt-16 rounded-xl lg:px-16">
        <Card color="transparent" shadow={false}>
          <Typography variant="h3" color="white" className=" lg:w-80">
            Suscríbete a nuestro newsletter
          </Typography>
          <form
            ref={form}
            className="mt-8 mb-2 w-96 sm:w-96 flex flex-col m-auto lg:w-full"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="mb-1 flex flex-col gap-3 text-white mr-3 lg:flex-row lg:gap-14">
              <div className="flex flex-col gap-3 lg:w-full">
                <Input
                  {...register("nombre", {
                    required: true,
                    maxLength: 20,
                  })}
                  variant="static"
                  placeholder="Nombre*"
                  color="white"
                />
                {errors.nombre?.type === "required" && (
                  <p className="font-medium text-red-500 text-md dark:text-red-500 ml-2">
                    * Campo requerido
                  </p>
                )}
                {errors.nombre?.type === "maxLength" && (
                  <p className="font-medium text-red-500 text-md dark:text-red-500 ml-2">
                    * Debe tener menos de 20 caracteres
                  </p>
                )}
                <Input
                  {...register("profesion", {
                    required: true,
                    maxLength: 20,
                  })}
                  variant="static"
                  placeholder="Profesión*"
                  color="white"
                />
                {errors.profesion?.type === "required" && (
                  <p className="font-medium text-red-500 text-md dark:text-red-500 ml-2">
                    * Campo requerido
                  </p>
                )}
                {errors.profesion?.type === "maxLength" && (
                  <p className="font-medium text-red-500 text-md dark:text-red-500 ml-2">
                    * Debe tener menos de 20 caracteres
                  </p>
                )}
                <Input
                  {...register("apellido", {
                    required: true,
                    maxLength: 20,
                  })}
                  variant="static"
                  placeholder="Apellido*"
                  color="white"
                />
                {errors.apellido?.type === "required" && (
                  <p className="font-medium text-red-500 text-md dark:text-red-500 ml-2">
                    * Campo requerido
                  </p>
                )}
                {errors.apellido?.type === "maxLength" && (
                  <p className="font-medium text-red-500 text-md dark:text-red-500 ml-2">
                    * Debe tener menos de 20 caracteres
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-3 lg:w-full">
                <Input
                  {...register("empresa", {
                    required: true,
                    maxLength: 20,
                  })}
                  variant="static"
                  placeholder="Empresa*"
                  color="white"
                />
                {errors.empresa?.type === "required" && (
                  <p className="font-medium text-red-500 text-md dark:text-red-500 ml-2">
                    * Campo requerido
                  </p>
                )}
                {errors.empresa?.type === "maxLength" && (
                  <p className="font-medium text-red-500 text-md dark:text-red-500 ml-2">
                    * Debe tener menos de 20 caracteres
                  </p>
                )}
                <Input
                  {...register("email", {
                    required: true,
                    maxLength: 30,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  })}
                  variant="static"
                  placeholder="Correo Electrónico*"
                  color="white"
                />
                {errors.email?.type === "required" && (
                  <p className="font-medium text-red-500 text-md dark:text-red-500 ml-2">
                    * Campo requerido
                  </p>
                )}
                {errors.email?.type === "pattern" && (
                  <p className="font-medium text-red-500 text-md dark:text-red-500 ml-2">
                    * Formato de email invalido
                  </p>
                )}
                <Input
                  {...register("pais", {
                    required: true,
                    maxLength: 20,
                  })}
                  variant="static"
                  placeholder="País*"
                  color="white"
                />
                {errors.pais?.type === "required" && (
                  <p className="font-medium text-red-500 text-md dark:text-red-500 ml-2">
                    * Campo requerido
                  </p>
                )}
                {errors.pais?.type === "maxLength" && (
                  <p className="font-medium text-red-500 text-md dark:text-red-500 ml-2">
                    * Debe tener menos de 20 caracteres
                  </p>
                )}
              </div>
            </div>
            <div className="flex justify-center md:justify-start mt-8">
              <ReCAPTCHA
                sitekey="6LeYYqIpAAAAACkSHTqoBXdPoBbnV70dmJj9tgXu"
                onChange={(val) => setCaptchaValido(val)}
              />
            </div>
            <div>
              <Button
                type="submit"
                className="rounded-full mt-6 w-28 bg-[#C1285D] capitalize text-base font-medium"
                disabled={!captchaValido}
              >
                Enviar
              </Button>
            </div>
            <ToastContainer />
          </form>
        </Card>
      </div>
    </>
  );
};

export default Contacto;
