import { Outlet } from "react-router-dom";
import Footer from "../ui/custom/others/Footer";
import Navbar from "../ui/custom/others/Navbar";

const MainLayout = () => {
  return (
    <div className="mx-auto">
      <Navbar />
      <div className="max-w-6xl mx-auto min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
