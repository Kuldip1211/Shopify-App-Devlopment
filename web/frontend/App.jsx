import { BrowserRouter } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { NavMenu } from "@shopify/app-bridge-react";
import Routes from "./Routes";
import "./App.css";

import { QueryProvider, PolarisProvider, Navigation } from "./components";

export default function App() {
  const pages = import.meta.glob("./pages/**/!(*.test.[jt]sx)*.([jt]sx)", {
    eager: true,
  });
  const { t } = useTranslation();

  return (
    <PolarisProvider>
      <BrowserRouter>
        <QueryProvider>
          <NavMenu />
          <div className="main-section">
            {/* Sidebar on the left */}
            <div className="main-menu">
              <Navigation />
            </div>

            {/* Main content area */}
            <div className="main-content">
              <Routes pages={pages} />
            </div>
          </div>
        </QueryProvider>
      </BrowserRouter>
    </PolarisProvider>
  );
}
