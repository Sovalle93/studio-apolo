import localFont from 'next/font/local';

export const nunito = localFont({
  src: [
    {
      path: '../../public/fonts/Nunito-VariableFont_wght.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Nunito-Italic-VariableFont_wght.woff2',
      weight: '400',
      style: 'italic',
    },
  ],
  variable: '--font-nunito',
});