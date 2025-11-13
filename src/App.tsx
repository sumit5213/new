import React, { useState, useEffect } from "react";
import { SideLayout } from "./layout/SideLayout";
import { TopLayout } from "./layout/TopLayout";
import { DashboardPage } from "./pages/DashboardPage";
import { OrdersPage } from "./pages/OrdersPage";
import { ProfilePage } from "./pages/ProfilePage";
import { useLocalStorage } from "./hooks/useLocalStorage";
// Theme logic is GONE from this file!

type PageRoute = "dashboard" | "orders" | "profile" | string;
type LayoutType = "side" | "top";

const App: React.FC = () => {
  // Layout state is still managed locally and saved
  const [layout, setLayout] = useLocalStorage<LayoutType>("layout", "side");
  
  // Other local state for app logic
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<PageRoute>("dashboard");

  // Simple hash-based router (unchanged)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1) || "dashboard";
      setCurrentPage(hash);
      setIsMobileOpen(false); // Close mobile sidebar on page change
    };

    window.addEventListener("hashchange", handleHashChange);
    handleHashChange(); // Run on initial load

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const toggleLayout = () => {
    setLayout((prevLayout) => (prevLayout === "side" ? "top" : "side"));
    setIsMobileOpen(false);
  };

  const toggleMobileSidebar = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  const renderPage = () => {
    if (currentPage.startsWith("orders")) return <OrdersPage />;
    if (currentPage.startsWith("profile")) return <ProfilePage />;
    return <DashboardPage />;
  };

  // The app is now just a clean router/layout switcher
  return (
    <div className="App dark:text-gray-100">
      {layout === "side" ? (
        <SideLayout
          isMobileOpen={isMobileOpen}
          onToggleMobileSidebar={toggleMobileSidebar}
          onSwitchLayout={toggleLayout}
        >
          {renderPage()}
        </SideLayout>
      ) : (
        <TopLayout onSwitchLayout={toggleLayout}>
          {renderPage()}
        </TopLayout>
      )}
    </div>
  );
};

export default App;