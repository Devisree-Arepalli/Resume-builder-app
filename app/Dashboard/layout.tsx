// app/dashboard/layout.tsx
import Sidebar from '@/components/Sidebar-Res';
import Navbar from '@/components/Navbar';
export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      
      <Sidebar />
      <main className="ml-64 w-full p-6">{children}</main>
    </div>
  );
}
