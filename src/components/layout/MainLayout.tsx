import { Outlet } from "react-router-dom";
import { ModeToggle } from "../ui/mode-toggle";
import { ThemeProvider } from "../ui/theme-provider";

const MainLayout = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div>
        <ModeToggle />
        <Outlet />
      </div>
    </ThemeProvider>
  );
};

export default MainLayout;
