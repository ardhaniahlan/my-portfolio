import type { RouteObject } from "react-router-dom";
import { Mainlayout } from "../components/layouts/Mainlayout";
import Home from "../components/pages/Home";
import Experience from "../components/pages/Experience";
import About from "../components/pages/About";
import { Project } from "../components/pages/Project";
import { ProjectDetail } from "../components/pages/Project/ProjectDetail";

export const routes: RouteObject[] = [
  {
    element: <Mainlayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/experience",
        element: <Experience />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/project",
        children: [
          {
            index: true,
            element: <Project />,
          },
          {
            path: ":id",
            element: <ProjectDetail />,
          },
        ],
      },
    ],
  },
];
