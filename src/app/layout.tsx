import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Footer from '@components/Footer/Footer';
import Header from '@components/Header/Header';
import ScrollToTopButton from '@components/ScrollToTopButton/ScrollToTopButton';

import './globals.css';

import { anzeigen_grotesk } from './fonts';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Confetti',
  description: 'Confetti creative team of decorators',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className={anzeigen_grotesk.className}>
      <body>
        <Header />
        <main className={styles.main}>{children}</main>
        <Footer />
        <ScrollToTopButton />
      </body>
    </html>
  );
}
