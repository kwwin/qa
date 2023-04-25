import { useRoutes } from "react-router-dom";
// ------ PAGES -------

 import Home from "../page/home";
import Portfolio from "../page/portfolio";
import About from "../page/about";
import Contact from "../page/contact";
import App from "../App";
 import HomeLayout from "../layout/HomeLayout";
// -------------------

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <HomeLayout />,
      children: [
        { element: <Home />, index: true },
        { path: "portfolio", element: <Portfolio /> },
        { path: "about", element: <About /> },
        { path: "contact", element: <Contact /> },
        { path: "home", element: <App /> },
      ],
    },
  ]);
}

