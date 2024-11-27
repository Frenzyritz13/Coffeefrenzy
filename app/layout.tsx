import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header } from '@/components/layout/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Highland Coffee Estates - Premium Coffee Bean Exporters',
  description: 'Experience the finest coffee beans from our highland estates. Premium coffee bean exporters specializing in arabica and peaberry varieties.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning className={inter.className}>
        <Header />
        <div className="pt-16">
          {children}
        </div>
      </body>
    </html>
  );
}