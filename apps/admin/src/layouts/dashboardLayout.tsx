import React from 'react';
import SearchBar from '../components/searchBar';

type DashboardLayoutProps = {
  children: React.ReactNode;
  dashboard?: React.ReactNode; // Add optional dashboard prop
};

export default function DashboardLayout({
  children,
  dashboard,
}: DashboardLayoutProps) {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Dashboard Sidebar */}
      {dashboard}
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Shared Search Bar */}
        <div className="p-4 bg-white shadow-sm">
          <SearchBar />
        </div>

        {/* Page Content */}
        <main className="flex-1 p-6 overflow-auto bg-[#F8FAFB]">
          {children}
        </main>
      </div>
    </div>
  );
}
