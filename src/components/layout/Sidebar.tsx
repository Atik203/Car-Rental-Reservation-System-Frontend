import { useCurrentToken } from "@/redux/features/auth/authSlice";
import { useAppSelector } from "@/redux/hooks";
import { adminPaths } from "@/routes/admin.routes";
import { userPaths } from "@/routes/user.routes";
import { verifyToken } from "@/utils/verifyToken";
import {
  ArrowLeftEndOnRectangleIcon,
  ArrowRightStartOnRectangleIcon,
} from "@heroicons/react/24/solid";
import { Layout, Menu, MenuProps } from "antd";
import { useState } from "react";
import { sidebarItemsGenerator } from "../../utils/sidebarItemsGenerator";

const { Sider } = Layout;

const Sidebar = () => {
  let user;

  const token = useAppSelector(useCurrentToken);

  if (token) {
    user = verifyToken(token);
  }

  let sidebarItems;
  if (user?.role === "admin") {
    sidebarItems = sidebarItemsGenerator(adminPaths, "admin");
  } else if (user?.role === "user") {
    sidebarItems = sidebarItemsGenerator(userPaths, "user");
  }

  const [collapsed, setCollapsed] = useState(false);

  return (
    <Sider
      breakpoint="lg"
      collapsedWidth={50}
      className="sider-style"
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      trigger={null}
      width={250}
    >
      <div
        className="flex items-center justify-center ml-2 my-4"
        onClick={() => setCollapsed(!collapsed)}
      >
        {collapsed ? (
          <ArrowRightStartOnRectangleIcon
            className="w-8 h-8 text-black dark:text-white"
            title="Open"
          />
        ) : (
          <ArrowLeftEndOnRectangleIcon
            className="w-8 h-8 text-black dark:text-white"
            title="Close"
          />
        )}
      </div>

      <Menu
        theme="light"
        mode="inline"
        className="sider-menu-style"
        defaultSelectedKeys={["1"]}
        items={sidebarItems as MenuProps["items"]}
      />
    </Sider>
  );
};

export default Sidebar;
