import { createBrowserRouter } from "react-router-dom";
import { LayoutRoutes } from "./layoutRoutes";

export const AppRouter = createBrowserRouter([
  ...LayoutRoutes
]);
