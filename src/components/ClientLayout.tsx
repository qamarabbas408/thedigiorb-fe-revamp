'use client';

import { usePathname } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
  const isAdminRoute = pathname?.startsWith('/admin');
  const isHomePage = pathname === '/';
  
  return (
    <>
      {!isAdminRoute && <Header />}
      <main className="main">{children}</main>
      {!isAdminRoute && <Footer />}
    </>
  );
}
