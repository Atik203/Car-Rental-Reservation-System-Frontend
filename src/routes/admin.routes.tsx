import AllBookings from "@/pages/admin/BookingManagement/AllBookings";
import PendingApprove from "@/pages/admin/BookingManagement/PendingApprove";
import AddCar from "@/pages/admin/CarManagement/AddCar";
import AllCarsList from "@/pages/admin/CarManagement/AllCarsList";
import BookedCars from "@/pages/admin/CarManagement/BookedCars";
import UpdateCar from "@/pages/admin/CarManagement/UpdateCar";
import AllUser from "@/pages/admin/UserManagement/AllUser";
import Profile from "@/pages/Profile";
import {
  FaCar,
  FaClipboardList,
  FaTachometerAlt,
  FaUsers,
} from "react-icons/fa";
import AdminDashboard from "../pages/admin/AdminDashboard";

export const adminPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <AdminDashboard />,
    icon: <FaTachometerAlt className="w-6 h-6 text-black dark:text-white" />,
  },
  {
    name: "Booking Management",
    icon: <FaClipboardList className="w-5 h-5 text-black dark:text-white" />,
    children: [
      {
        name: "All Bookings",
        path: "all-bookings",
        element: <AllBookings />,
      },
      {
        name: "Pending Bookings",
        path: "pending-bookings",
        element: <PendingApprove />,
      },
    ],
  },
  {
    name: "Car Management",
    icon: <FaCar className="w-5 h-5 text-black dark:text-white" />, // Using FaCar icon for Car Management
    children: [
      {
        name: "All Cars",
        path: "all-cars",
        element: <AllCarsList />,
      },
      {
        name: "Booked Cars",
        path: "booked-cars",
        element: <BookedCars />,
      },
      {
        name: "Add Car",
        path: "add-car",
        element: <AddCar />,
      },
      {
        path: "update-car/:id",
        element: <UpdateCar />,
      },
    ],
  },
  {
    name: "User Management",
    icon: <FaUsers className="w-5 h-5 text-black dark:text-white" />, // Using FaUsers icon for User Management
    children: [
      {
        name: "All Users",
        path: "all-users",
        element: <AllUser />,
      },
    ],
  },
  {
    path: "profile",
    element: <Profile />,
  },
];
