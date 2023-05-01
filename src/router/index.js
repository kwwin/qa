import { useRoutes } from "react-router-dom";
// ------ PAGES -------

import Home from "../page/home";
import Portfolio from "../page/portfolio";
import About from "../page/about";
import Contact from "../page/contact";
import Vlog from "../page/vlog";
import App from "../App";

//subpages of portfolio
import Rentie from "../slider/rentie";
import Angelstore from "../slider/angelstore";
import Caiscience from "../slider/caiscience";
import Caienglish from "../slider/caienglish";
import Project1 from "../slider/project1";
import Projectt2 from "../slider/projectt2";

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
        { path: "vlog", element: <Vlog /> },
        { path: "home", element: <App /> },
        {
          path: "rentie",
          element: <Rentie />,
        },
        {
          path: "angelstore",
          element: <Angelstore />,
        },
        {
          path: "caiscience",
          element: <Caiscience />,
        },
        {
          path: "caienglish",
          element: <Caienglish />,
        },
        {
          path: "project1",
          element: <Project1 />,
        },
        {
          path: "projectt2",
          element: <Projectt2 />,
        },
      ],
    },
  ]);
}