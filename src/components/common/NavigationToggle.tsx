import React from 'react';
import { useNavigation } from '../../context/NavigationContext';

const NavigationToggle: React.FC = () => {
  const { navigationType, toggleNavigationType } = useNavigation();

  return (
    <button
      onClick={toggleNavigationType}
      className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-200"
      title="Toggle Navigation Layout"
    >
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        {navigationType === 'left' ? (
          <>
            <rect x="3" y="3" width="7" height="18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <rect x="13" y="3" width="8" height="5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </>
        ) : (
          <>
            <rect x="3" y="3" width="18" height="5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <rect x="3" y="12" width="8" height="9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </>
        )}
      </svg>
      <span className="hidden sm:inline">{navigationType === 'left' ? 'Side Nav' : 'Top Nav'}</span>
    </button>
  );
};

export default NavigationToggle;
