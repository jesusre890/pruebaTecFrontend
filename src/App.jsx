import React from "react";
import "./App.css";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
  Button,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "./assets/logoAgora.png";
import Footer from "./components/Footer";
import {RouterProvider,createBrowserRouter} from "react-router-dom";
import {Routes} from "./routes/Routes";

const router = createBrowserRouter(Routes);

function App() {
  function NavList() {
    return (
      <ul className="my-2 flex flex-col items-center gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 ">
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
            href="/blog"
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
            href="/"
            className="flex items-center hover:text-blue-500 transition-colors"
          >
            Home
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
      <header className=" lg:sticky lg:top-0 lg:z-50">
        <Navbar className="mx-auto max-w-screen-2xl px-6 py-3 shadow-lg">
          <div className="flex items-center justify-between text-blue-gray-900">
            <img src={logo} alt="" className=" w-28" />

            <div className="hidden lg:block">
              <NavList />
            </div>
            <Button className=" ml-10 lg:ml-0 rounded-full h-6 py-0 mt-0 w-28 bg-[#C1285D] capitalize text-base font-medium lg:mt-0 lg:h-6 lg:w-24">
              Donar
            </Button>
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
        <RouterProvider router={router}/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
