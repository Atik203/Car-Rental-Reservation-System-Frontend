import DashboardLayout from "@/components/layout/DashboardLayout";
import MainLayout from "@/components/layout/MainLayout";
import About from "@/pages/About";
import Booking from "@/pages/booking/Booking";
import CarDetails from "@/pages/car/CarDetails";
import Cars from "@/pages/car/Cars";
import Contact from "@/pages/Contact";
import ErrorPage from "@/pages/ErrorPage";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import SignUp from "@/pages/Signup";
import TermsConditions from "@/pages/TermsConditions";
import { routeGenerator } from "@/utils/routeGenerator";
import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "../components/layout/ProtectedRoute";
import { adminPaths } from "./admin.routes";
import { userPaths } from "./user.routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about-us",
        element: <About />,
      },
      {
        path: "/contact-us",
        element: <Contact />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
      {
        path: "/booking/:id",
        element: <Booking />,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/terms-conditions",
        element: <TermsConditions />,
      },
      {
        path: "/cars",
        element: <Cars />,
      },
      {
        path: "/car-details/:id",
        element: <CarDetails />,
      },
    ],
  },
  {
    path: "/admin",
    element: (
      <ProtectedRoute role="admin">
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: routeGenerator(adminPaths),
  },
  {
    path: "/user",
    element: (
      <ProtectedRoute role="user">
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: routeGenerator(userPaths),
  },
]);

export default router;
