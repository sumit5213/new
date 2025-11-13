import React, { useState } from "react";
import { navigationItems, type NavItem } from "../data/Navigation";

interface SidebarProps {
  isMobileOpen: boolean;
}

export const Sidebar: React.FC<SidebarProps> = ({ isMobileOpen }) => {
  const [openMenu, setOpenMenu] = useState<string | null>(() => {
    const currentHash = window.location.hash;
    const activeItem = navigationItems.find((item) =>
      item.subItems?.some((sub) => sub.href === currentHash)
    );
    return activeItem?.name || null;
  });

  const toggleMenu = (name: string) => {
    setOpenMenu(openMenu === name ? null : name);
  };

  const renderItem = (item: NavItem) => {
    if (item.subItems) {
      const isOpen = openMenu === item.name;
      return (
        <li key={item.name}>
          <button
            onClick={() => toggleMenu(item.name)}
            className="flex items-center justify-between w-full px-3 py-2.5 rounded-md text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
          >
            <span className="flex items-center gap-3">
              {navigationItems.map((item) => (
                <item.icon />  // works perfectly
              ))}
              <span className="font-medium">{item.name}</span>
            </span>
            <svg
              className={`w-5 h-5 transition-transform duration-200 ${isOpen ? "rotate-90" : ""
                }`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <ul
            className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96" : "max-h-0"
              }`}
          >
            {item.subItems.map((sub) => (
              <li key={sub.name} className="mt-1">
                <a
                  href={sub.href}
                  className="block py-2 pl-11 pr-3 rounded-md text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200"
                >
                  {sub.name}
                </a>
              </li>
            ))}
          </ul>
        </li>
      );
    }

    return (
      <li key={item.name}>
        <a
          href={item.href}
          className="flex items-center gap-3 px-3 py-2.5 rounded-md text-gray-700 font-medium hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
        >
          {navigationItems.map((item) => (
            <item.icon />  // works perfectly
          ))}
          {item.name}
        </a>
      </li>
    );
  };

  return (
    <aside
      className={`fixed top-0 left-0 z-40 w-72 h-screen bg-white border-r border-gray-200 p-4 transition-transform duration-300 ease-in-out dark:bg-gray-800 dark:border-gray-700
        ${isMobileOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0`}
    >
      <a
        href="#dashboard"
        className="text-2xl font-bold text-blue-600 dark:text-blue-500 mb-6 px-3 pt-4 block"
      >
        LOGO
      </a>
      <ul className="flex flex-col gap-1">{navigationItems.map(renderItem)}</ul>
    </aside>
  );
};