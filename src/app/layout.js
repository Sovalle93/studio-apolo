import Header from '@/app/components/Header';
import './globals.css';
import { baskerville } from './fonts';
import Footer from './components/Footer';

export const metadata = {
  title: {
    default: 'Studio Apolo | Soluciones creativas que transforman negocios', 
    template: '%s | Studio Apolo', 
  },
  description: 'Soluciones creativas que transforman negocios.',
  metadataBase: new URL('https://studioapolo.cl/'),
  alternates: {
    canonical: '/', 
  },
  openGraph: {
    title: 'Studio Apolo | Creative Solutions',
    description: 'Transforma tus ideas a la realidad con Studio Apolo.',
    images: 'https://res.cloudinary.com/dmivjpb65/image/upload/v1747078584/Screenshot_2025-04-18_161258_1_w0oaiy.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${baskerville.variable} font-sans`}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
