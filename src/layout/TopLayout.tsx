import React from "react";
import { AppTopNav } from "./AppTopNav";

interface TopLayoutProps {
  onSwitchLayout: () => void;
  children: React.ReactNode;
}

export const TopLayout: React.FC<TopLayoutProps> = ({
  onSwitchLayout,
  children,
}) => {
  return (
    <div className="relative flex flex-col h-screen overflow-hidden">
      {/* TopNav */}
      <AppTopNav onSwitchLayout={onSwitchLayout} />

      {/* Main Content Area */}
      <main className="flex-1 p-4 md:p-8 min-h-[calc(100vh-64px)] overflow-y-auto bg-gray-100 dark:bg-gray-900">
        {children}
      </main>
    </div>
  );
};