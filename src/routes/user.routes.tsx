import UserDashboard from "@/pages/user/UserDashboard";

export const userPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <UserDashboard />,
  },
  {
    name: "User Management",
    children: [
      {
        name: "Create Student",
        path: "create-student",
        element: "COMPONENT_NAME",
      },
      {
        name: "Create Faculty",
        path: "create-faculty",
        element: "COMPONENT_NAME",
      },
    ],
  },
];
