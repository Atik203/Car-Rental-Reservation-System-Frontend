import DashboardLayout from "@/components/layout/DashboardLayout";
import MainLayout from "@/components/layout/MainLayout";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import { routeGenerator } from "@/utils/routeGenerator";

import Home from "@/pages/Home";
import { createBrowserRouter } from "react-router-dom";
import { adminPaths } from "./admin.routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <div>404</div>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/admin",
    element: <DashboardLayout />,
    children: routeGenerator(adminPaths),
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;
