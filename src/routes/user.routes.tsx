import Profile from "@/pages/Profile";
import MyBookings from "@/pages/user/MyBookings";
import UserDashboard from "@/pages/user/UserDashboard";
import { HomeIcon } from "@heroicons/react/24/outline";

export const userPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <UserDashboard />,
    icon: <HomeIcon className="w-6 h-6 text-black dark:text-white" />,
  },
  {
    name: "Booking Management",
    icon: <HomeIcon className="w-6 h-6 text-black dark:text-white" />,
    children: [
      {
        name: "My Bookings",
        path: "my-bookings",
        element: <MyBookings />,
      },
    ],
  },
  {
    path: "profile",
    element: <Profile />,
  },
];
