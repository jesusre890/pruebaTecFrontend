import Blog from "../pages/blog/Blog";
import Home from "../pages/home/Home";
import Prueba from "../pages/prueba/Prueba";

export const Routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/prueba",
    element: <Prueba />,
  },
];

