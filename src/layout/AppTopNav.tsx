import React, { useState, useEffect, useRef } from "react";
import { navigationItems, type NavItem } from "../data/Navigation";
import { DropdownUser } from "../components/common/DropdownUser";
import { DarkModeSwitcher } from "../components/Switchers/DarkModeSwitcher";
import AngleDownIcon from "../icons/angle-down.svg?react";
import ListIcon from "../icons/list.svg?react";

export const AppTopNav: React.FC<{ onSwitchLayout: () => void }> = ({
  onSwitchLayout,
}) => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = (name: string) => {
    setOpenMenu(openMenu === name ? null : name);
  };

  // Close dropdown if clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpenMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Render a single nav item (either link or dropdown)
  const renderItem = (item: NavItem, isMobile: boolean = false) => {
    const itemClass = isMobile
      ? "block w-full text-left px-4 py-3 text-gray-700 font-medium hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
      : "px-3 py-2 rounded-md text-gray-700 font-medium hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700";

    const subItemClass = isMobile
      ? "block w-full text-left pl-12 pr-4 py-2 text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
      : "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700";

    if (item.subItems) {
      const isOpen = openMenu === item.name;
      return (
        <div
          key={item.name}
          className={isMobile ? "w-full" : "relative"}
          ref={!isMobile ? menuRef : null} // Only attach ref to desktop dropdown
        >
          <button
            onClick={() => toggleMenu(item.name)}
            className={`${itemClass} flex items-center justify-between w-full`}
          >
            <span className="flex items-center gap-3">
              {item.icon}
              {item.name}
            </span>
            <AngleDownIcon
              className={`w-4 h-4 ml-1 transition-transform ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </button>
          {isOpen && (
            <div
              className={
                isMobile
                  ? "pl-4"
                  : "absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200 dark:bg-gray-800 dark:border-gray-700"
              }
            >
              {item.subItems.map((sub) => (
                <a
                  key={sub.name}
                  href={sub.href}
                  className={subItemClass}
                  onClick={() => {
                    setOpenMenu(null);
                    setIsMobileMenuOpen(false);
                  }}
                >
                  {sub.name}
                </a>
              ))}
            </div>
          )}
        </div>
      );
    }

    return (
      <a
        key={item.name}
        href={item.href}
        className={`${itemClass} flex items-center gap-3`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        {item.icon}
        {item.name}
      </a>
    );
  };

  return (
    <header className="sticky top-0 z-30 bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      {/* Main Top Bar */}
      <div className="flex items-center justify-between h-16 px-4 md:px-8">
        <div className="flex items-center gap-6">
          <a
            href="#dashboard"
            className="text-2xl font-bold text-blue-600 dark:text-blue-500"
          >
            LOGO
          </a>
          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navigationItems.map((item) => renderItem(item, false))}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <DarkModeSwitcher />
          <DropdownUser onSwitchLayout={onSwitchLayout} />
          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-gray-700 dark:text-gray-300"
            aria-label="Toggle navigation"
          >
            <ListIcon className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu (Full-width dropdown) */}
      {isMobileMenuOpen && (
        <nav className="lg:hidden flex flex-col gap-1 p-4 border-t border-gray-200 dark:border-gray-700">
          {navigationItems.map((item) => renderItem(item, true))}
        </nav>
      )}
    </header>
  );
};