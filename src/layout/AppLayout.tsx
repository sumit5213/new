import React from 'react';
import Header from '../components/header/Header';
import AppSidebar from './AppSidebar';
import AppTopNav from './AppTopNav';
import { useNavigation } from '../context/NavigationContext';

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  const { navigationType } = useNavigation();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      
      {navigationType === 'top' && <AppTopNav />}

      <div className="flex">
        {navigationType === 'left' && <AppSidebar />}
        
        <main className="flex-1 p-4 lg:p-6 overflow-auto">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
