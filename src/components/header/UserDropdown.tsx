import React from 'react';
import ThemeToggleButton from '../common/ThemeToggleButton';
import UserDropdown from './UserDropdown';
import { useSidebar } from '../../context/SidebarContext';
import { useNavigation } from '../../context/NavigationContext';

const Header: React.FC = () => {
  const { toggleSidebar } = useSidebar();
  const { navigationType } = useNavigation();

  return (
    <header className="sticky top-0 z-40 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 shadow-sm">
      <div className="flex items-center justify-between px-4 lg:px-6 h-16">
        <div className="flex items-center gap-4">
          {/* Navigation Drawer Toggle - Only for Left Navigation */}
          {navigationType === 'left' && (
            <button
              onClick={toggleSidebar}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle sidebar"
            >
              <svg className="w-6 h-6 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          )}

          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">A</span>
            </div>
            <span className="text-xl font-bold text-gray-900 dark:text-white hidden sm:inline">AdminPanel</span>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-3">
          <ThemeToggleButton />
          <UserDropdown />
        </div>
      </div>
    </header>
  );
};

export default Header;
