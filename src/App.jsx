import React from "react";
import "./App.css";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "./assets/logoAgora.png";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import QueHacemos from "./components/queHacemos/QueHacemos";
import Convocatorias from "./components/convocatorias/Convocatorias";
import Aliados from "./components/aliados/Aliados";
import Financiadores from "./components/aliados/Financiadores";
import Impacto from "./components/Impacto";

function App() {
  function NavList() {
    return (
      <ul className="my-2 flex flex-col items-center gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
        <Typography
          as="li"
          variant="medium"
          color="blue-gray"
          className="p-1 font-normal"
        >
          <a
            href="#"
            className="flex items-center hover:text-blue-500 transition-colors"
          >
            Quiénes somos
          </a>
        </Typography>
        <Typography
          as="li"
          variant="medium"
          color="blue-gray"
          className="p-1 font-normal"
        >
          <a
            href="#"
            className="flex items-center hover:text-blue-500 transition-colors"
          >
            Programas
          </a>
        </Typography>
        <Typography
          as="li"
          variant="medium"
          color="blue-gray"
          className="p-1 font-normal"
        >
          <a
            href="#"
            className="flex items-center hover:text-blue-500 transition-colors"
          >
            Impacto
          </a>
        </Typography>
        <Typography
          as="li"
          variant="medium"
          color="blue-gray"
          className="p-1 font-normal"
        >
          <a
            href="#"
            className="flex items-center hover:text-blue-500 transition-colors"
          >
            Súmate
          </a>
        </Typography>
        <Typography
          as="li"
          variant="medium"
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
          variant="medium"
          color="blue-gray"
          className="p-1 font-normal"
        >
          <a
            href="#"
            className="flex items-center hover:text-blue-500 transition-colors"
          >
            Recursos
          </a>
        </Typography>
        <Typography
          as="li"
          variant="medium"
          color="blue-gray"
          className="p-1 font-normal"
        >
          <a
            href="#"
            className="flex items-center hover:text-blue-500 transition-colors"
          >
            Sedes
          </a>
        </Typography>
        <Typography
          as="li"
          variant="medium"
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

  const [openNav, setOpenNav] = React.useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div className="">
      <header className="">
        <Navbar className="mx-auto max-w-screen-2xl px-6 py-3 shadow-none">
          <div className="flex items-center justify-between text-blue-gray-900">
            <img src={logo} alt="" className=" w-40" />

            <div className="hidden lg:block">
              <NavList />
            </div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <XMarkIcon className="h-6 w-6" strokeWidth={2} />
              ) : (
                <Bars3Icon className="h-6 w-6" strokeWidth={2} />
              )}
            </IconButton>
          </div>
          <Collapse open={openNav}>
            <NavList />
          </Collapse>
        </Navbar>
      </header>
      <main>
        <Banner />
        <QueHacemos />
        <Convocatorias />
        <Aliados />
        <Financiadores />
        <Impacto/>
        <Footer />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
