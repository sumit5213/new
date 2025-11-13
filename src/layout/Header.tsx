import React from "react";
import { DropdownUser } from "../components/common/DropdownUser";
import { DarkModeSwitcher } from "../components/Switchers/DarkModeSwitcher";

interface HeaderProps {
  onToggleMobileSidebar: () => void;
  onSwitchLayout: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onToggleMobileSidebar,
  onSwitchLayout,
}) => {
  return (
    <header className="sticky top-0 z-30 flex items-center justify-between h-16 px-4 md:px-8 bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <div className="flex items-center gap-4">
        {/* Hamburger button for mobile, hidden on desktop */}
        <button
          onClick={onToggleMobileSidebar}
          className="lg:hidden text-gray-700 dark:text-gray-300"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Logo - visible on mobile header, hidden on desktop (sidebar has it) */}
        <a
          href="#dashboard"
          className="text-2xl font-bold text-blue-600 dark:text-blue-500 lg:hidden"
        >
          LOGO
        </a>
      </div>

      <div className="flex items-center gap-4">
        <DarkModeSwitcher />
        <DropdownUser onSwitchLayout={onSwitchLayout} />
      </div>
    </header>
  );
};