import Header from '@/app/components/Header';
import './globals.css';
import { baskerville } from './fonts';
import Footer from './components/Footer';

export const metadata = {
  title: 'Studio Apolo',
  description: 'Innovative design and development services',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en"className={`${baskerville.variable} font-sans`}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}