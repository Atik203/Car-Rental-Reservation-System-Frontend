import Profile from "@/pages/Profile";
import BookingPayments from "@/pages/user/BookingPayments";
import MyBookings from "@/pages/user/MyBookings";
import UserDashboard from "@/pages/user/UserDashboard";
import { FaBook, FaHome, FaMoneyBillWave, FaUser } from "react-icons/fa"; // Importing icons from react-icons

export const userPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <UserDashboard />,
    icon: <FaHome className="w-6 h-6 text-black dark:text-white" />, // Using FaHome icon
  },
  {
    name: "Booking Management",
    icon: <FaBook className="w-5 h-5 text-black dark:text-white" />, // Using FaBook icon
    children: [
      {
        name: "My Bookings",
        path: "my-bookings",
        element: <MyBookings />,
      },
    ],
  },
  {
    name: "Payment Management",
    icon: <FaMoneyBillWave className="w-5 h-5 text-black dark:text-white" />, // Using FaMoneyBillWave icon
    children: [
      {
        name: "My Payments",
        path: "my-payments",
        element: <BookingPayments />,
      },
    ],
  },
  {
    path: "profile",
    element: <Profile />,
    icon: <FaUser className="w-6 h-6 text-black dark:text-white" />, // Using FaUser icon
  },
];
