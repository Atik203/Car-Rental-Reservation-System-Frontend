import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      {/* <ModeToggle /> */}
      <Outlet />
    </div>
  );
};

export default MainLayout;
