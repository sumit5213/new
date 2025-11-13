import React from "react";
import { useTheme } from "../../context/ThemeContext"; // <-- Import the new hook
import { SunIcon, MoonIcon } from "../common/Icons"; // <-- Import from Icons.tsx

export const DarkModeSwitcher: React.FC = () => {
  // Consume the context
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <button
      onClick={toggleDarkMode} // Call the function from context
      className="relative flex items-center justify-center w-12 h-6 rounded-full bg-gray-200 dark:bg-gray-700 focus:outline-none"
    >
      <span
        className={`absolute left-0.5 transition-transform duration-200 ease-in-out ${
          isDarkMode ? "translate-x-6" : "translate-x-0"
        }`}
      >
        <span className="flex items-center justify-center w-5 h-5 bg-white rounded-full shadow-md text-gray-700 dark:text-gray-900">
          {isDarkMode ? <MoonIcon /> : <SunIcon />}
        </span>
      </span>
    </button>
  );
};