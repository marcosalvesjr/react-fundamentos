import MainLayout from "@/layout/MainLayout";
import { AboutRoutes } from "@/pages/About/routes/route";
import { HomeRoutes } from "@/pages/Home/routes/route";
import LoginPage from "@/pages/Login";
import { PostsRoutes } from "@/pages/Posts/routes";
import { ProductsRoutes } from "@/pages/Products/routes/route";
import ProtectedRoutes from "./protectedRoutes";

export const LayoutRoutes = [
  { path: "/login", element: <LoginPage /> },
  {
    path: "/",
    element: <ProtectedRoutes />,
    children: [
      {
        element: <MainLayout />,
        children: [
          ...HomeRoutes,
          ...ProductsRoutes,
          ...AboutRoutes,
          ...PostsRoutes,
        ],
      },
    ],
  },
];
