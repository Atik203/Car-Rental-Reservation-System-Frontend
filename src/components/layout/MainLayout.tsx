import { Outlet } from "react-router-dom";
import Banner from "../ui/custom/customUI/Banner";
import Footer from "../ui/custom/others/Footer";
import Navbar from "../ui/custom/others/Navbar";

const MainLayout = () => {
  return (
    <div className="mx-auto">
      <Banner />
      <Navbar />
      <div className="max-w-6xl mx-auto min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
