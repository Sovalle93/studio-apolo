import localFont from 'next/font/local';

export const baskerville = localFont({
  src: [
    {
      path: '../../public/fonts/Baskervville-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Baskervville-Italic.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-baskerville',
});