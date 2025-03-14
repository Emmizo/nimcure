// app/layout.tsx
import './globals.css';
import { Inter } from 'next/font/google';
import Header from './components/header';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Patient Management Dashboard',
  description: 'Medical delivery and patient management system',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50`}>
        
        <main>{children}</main>
      </body>
    </html>
  );
}