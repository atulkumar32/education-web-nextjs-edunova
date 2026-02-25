import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.scss';
import StoreProvider from '@/components/providers/StoreProvider';
import BookLayout from '@/components/book/BookLayout';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CodeProtection from '@/components/common/CodeProtection';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'EduNova - Transform Your Future with Online Learning',
  description: 'Master new skills with expert-led online courses. Web development, data science, design, and more.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>
          <CodeProtection />
          <BookLayout>
            <Header />
            <main>{children}</main>
            <Footer />
          </BookLayout>
        </StoreProvider>
      </body>
    </html>
  );
}
