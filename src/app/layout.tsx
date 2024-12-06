import localFont from 'next/font/local';
import './globals.css';
import Nav from '@/components/nav';
import Footer from '@/components/footer';
import Providers from './providers';
import React from 'react';
import Head from 'next/head';
import Template from '@/components/template';

const pretendard = localFont({
  src: '../fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
});

export const metadata = {
  title: 'Fitculator',
  description: 'fitculator io',
  icons: {
    icon: '/images/logo-favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scrollbar-hide">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body className={`${pretendard.variable} font-pretendard`}>
        <Nav smWidth="sm:w-[7rem]" />
        <Template>
          <Providers>{children}</Providers>
        </Template>
        <Footer />
      </body>
    </html>
  );
}
