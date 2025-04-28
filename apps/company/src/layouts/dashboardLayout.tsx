import React from 'react';
import SearchBar from '../components/appBar';
import Dashboard from '../components/dashboard';
import Delete from '../components/delete';

type DashboardLayoutProps = {
  children: React.ReactNode;
  dashboard?: React.ReactNode;
  blur?: boolean;
  deleteMessage?: React.ReactNode;
};

export default function DashboardLayout({
  children,
  blur = false,
  deleteMessage = null,
}: DashboardLayoutProps) {
  return (
    <div>
      <div className={`flex h-screen bg-gray-50 ${blur ? 'blur-sm' : ''}`}>
        {/* Dashboard Sidebar */}
        <div className="w-1/6">
          <Dashboard />
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Shared Search Bar */}
          <div className="p-4 bg-white shadow-sm">
            <SearchBar />
          </div>

          {/* Page Content */}
          <main className="flex-1 p-5 overflow-auto bg-[#F8FAFB] w-full">
            {children}
          </main>
        </div>

        {/* Optional Overlay - Add if you need click protection */}
      </div>
      {blur && (
        <div className="fixed inset-0 bg-black/10 backdrop-blur-[1px] z-10 h-screen w-screen flex justify-center items-center">
          <Delete>{deleteMessage}</Delete>
        </div>
      )}
    </div>
  );
}
