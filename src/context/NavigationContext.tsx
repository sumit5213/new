import React, { createContext, useContext, useState } from 'react';

type NavigationType = 'left' | 'top';

interface NavigationContextType {
  navigationType: NavigationType;
  toggleNavigationType: () => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const NavigationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [navigationType, setNavigationType] = useState<NavigationType>('left');

  const toggleNavigationType = () => {
    setNavigationType((prev) => (prev === 'left' ? 'top' : 'left'));
  };

  return (
    <NavigationContext.Provider value={{ navigationType, toggleNavigationType }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within NavigationProvider');
  }
  return context;
};
