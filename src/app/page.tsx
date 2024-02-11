import Head from 'next/head';
import AboutUs from '@sections/AboutUs/AboutUs';
import Contacts from '@sections/Contacts/Contacts';
import Reviews from '@sections/Reviews/Reviews';

import Hero from '../sections/Hero/Hero';

export default function Home() {
  return (
    <>
      <Head>
        <title>Confetti</title>
        <meta
          property="og:image"
          content="https://i.ibb.co/3zCnsfp/there-are-bunch-pink-balloons-floating-air-generative-ai-3-1.png"
        />
      </Head>
      <Hero id="główna" />
      <AboutUs id="oNas" />
      <Reviews id="recenzje" />
      <Contacts id="kontakty" />
    </>
  );
}
