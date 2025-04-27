
'use client';

import React from 'react';
import Footer from '../components/Footer';
import AppBarB2B from './Navbar/AppBarB2B';

interface ClientSideLayoutProps {
  children: React.ReactNode;
}

export default function ClientSideLayout({ children }: ClientSideLayoutProps) {
  return (
    <>
      <AppBarB2B />
      {children}
      <Footer />
    </>
  );
}