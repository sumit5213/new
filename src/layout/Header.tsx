import React from "react";
import { DropdownUser } from "../components/common/DropdownUser";
import { DarkModeSwitcher } from "../components/Switchers/DarkModeSwitcher";
import ListIcon from "../icons/list.svg?react";

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
          <ListIcon className="w-6 h-6" />
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