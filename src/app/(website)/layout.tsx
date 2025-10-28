import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import { ReactNode } from 'react';
import React from 'react';
import Totopbtn from './ToTopBtn';

export default function WebsiteLayout({ children }: { children: ReactNode }) {
  return (
    <section>
      <div className='flex flex-col min-h-screen '>
        <Navbar />
        <main className='flex-grow w-full '>{children}</main>
        <Footer />
      </div>
      <div className='max-w-[1472px]'>
        <Totopbtn />
      </div>
    </section>
  );
}
