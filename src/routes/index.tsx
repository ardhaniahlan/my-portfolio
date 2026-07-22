import { createBrowserRouter } from "react-router-dom";
import { routes } from "./Route";

export default createBrowserRouter(routes, {
  basename: import.meta.env.BASE_URL,
});