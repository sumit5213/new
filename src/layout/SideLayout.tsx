import React from "react";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

interface SideLayoutProps {
  isMobileOpen: boolean;
  onToggleMobileSidebar: () => void;
  onSwitchLayout: () => void;
  children: React.ReactNode;
}

export const SideLayout: React.FC<SideLayoutProps> = ({
  isMobileOpen,
  onToggleMobileSidebar,
  onSwitchLayout,
  children,
}) => {
  return (
    <div className="relative flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar isMobileOpen={isMobileOpen} />

      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/* Header */}
        <Header
          onToggleMobileSidebar={onToggleMobileSidebar}
          onSwitchLayout={onSwitchLayout}
        />

        {/* Main Content Area: w-72 is 288px */}
        <main className="p-4 md:p-8 min-h-[calc(100vh-64px)] transition-all duration-300 ease-in-out lg:ml-72 bg-gray-100 dark:bg-gray-900">
          {children}
        </main>
      </div>
    </div>
  );
};