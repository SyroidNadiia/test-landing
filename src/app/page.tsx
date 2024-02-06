import AboutUs from '@components/AboutUs/AboutUs';
import Contacts from '@components/Contacts/Contacts';
import Hero from '@components/Hero/Hero';
import Reviews from '@components/Reviews/Reviews';

export default function Home() {
  return (
    <>
      <Hero id="główna" />
      <AboutUs id="oNas" />
      <Reviews id="recenzje" />
      <Contacts id="kontakty" />
    </>
  );
}
