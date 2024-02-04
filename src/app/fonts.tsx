import localFont from 'next/font/local';

export const inter = localFont({
  src: [
    {
      path: '../../public/fonts/Inter.woff2',
      weight: '500',
      style: 'normal',
    },
  ],
});

export const anzeigen_grotesk = localFont({
  src: [
    {
      path: '../../public/fonts/Anzeigen-Grotesk-T.ttf',
      weight: '500',
      style: 'normal',
    },
  ],
});
