import React from 'react';
import { ILayout } from '@/types/layout';
import { LayoutProvider } from './style';
import Navbar from '@/components/navbar';
import { useRouter } from 'next/router';
import { Footer } from '@/components/footer';
import { PERMISSIONS } from '@/constants/router-paths';
import { Call } from '@/components/call';

export const Layout = ({ children }: ILayout) => {
  const { pathname } = useRouter();

  return (
    <LayoutProvider>
      {!PERMISSIONS.includes(pathname) && <Navbar />}
      <main>{children}</main>
      {!PERMISSIONS.includes(pathname) && <Call />}
      {!PERMISSIONS.includes(pathname) && <Footer />}
    </LayoutProvider>
  );
};
