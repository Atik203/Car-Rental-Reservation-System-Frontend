import {
  CheckBadgeIcon,
  ExclamationCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
  MagnifyingGlassCircleIcon,
} from "@heroicons/react/24/outline";
import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { Toaster } from "sonner";
import { ThemeProvider } from "./components/ui/theme-provider";
import "./index.css";
import { persistor, store } from "./redux/store.ts";
import router from "./routes/routes.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <PersistGate loading={null} persistor={persistor}>
        <Provider store={store}>
          <Toaster
            visibleToasts={10}
            richColors={true}
            toastOptions={{
              classNames: {
                success: "toast-success toast-common",
                error: "toast-error toast-common",
                warning: "toast-warning toast-common",
                info: "toast-info toast-common",
              },
            }}
            icons={{
              success: <CheckBadgeIcon className="w-6 h-6" />,
              info: <InformationCircleIcon className="w-6 h-6" />,
              warning: <ExclamationCircleIcon className="w-6 h-6" />,
              error: <ExclamationTriangleIcon className="w-6 h-6" />,
              loading: <MagnifyingGlassCircleIcon className="w-6 h-6" />,
            }}
          />

          <HelmetProvider>
            <RouterProvider router={router} />
          </HelmetProvider>
        </Provider>
      </PersistGate>
    </ThemeProvider>
  </React.StrictMode>
);
