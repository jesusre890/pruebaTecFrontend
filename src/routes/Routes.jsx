import Blog from "../pages/blog/Blog";
import Home from "../pages/home/Home";

export const Routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
];

