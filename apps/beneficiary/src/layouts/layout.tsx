import Header from '../components/header';
export default function Layout({ children }: any) {
  return (
    <div className="flex h-screen bg-gray-50 flex-col">
      {/* Shared Search Bar */}
      <div className="bg-white shadow-sm">
        <Header />
      </div>

      {/* Page Content */}
      <main className=" p-5 overflow-auto bg-[#F8FAFB] w-full h-full">
        {children}
      </main>
    </div>
  );
}
