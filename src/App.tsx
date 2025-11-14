import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import { ThemeProvider } from './context/ThemeContext';
import { NavigationProvider } from './context/NavigationContext';
import { SidebarProvider } from './context/SidebarContext';
import AppLayout from './layout/AppLayout';
import Dashboard from './pages/Dashboard';
import Orders from './pages/Orders';
import Profile from './pages/Profile';
import Payments from './pages/Payments';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <NavigationProvider>
        <SidebarProvider>
          <Router>
            <AppLayout>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/payments" element={<Payments />} />
              </Routes>
            </AppLayout>
          </Router>
        </SidebarProvider>
      </NavigationProvider>
    </ThemeProvider>
  );
};

export default App;
