import Hero from '@components/Hero/Hero';
import AboutUs from '@components/AboutUs/AboutUs';
import Reviews from '@components/Reviews/Reviews';
import Contacts from '@components/Contacts/Contacts';
import InformationForm from '@components/InformationForm/InformationForm';

export default function Home() {
  return (
    <>
      <Hero id="główna" />
      <AboutUs id="oNas" />
      <Reviews id="recenzje" />
      <Contacts id="kontakty" />
      <InformationForm />
    </>
  );
}
