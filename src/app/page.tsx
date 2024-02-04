import Image from 'next/image';
import styles from './page.module.css';
import Hero from '@components/Hero/Hero';
import AboutUs from '@components/AboutUs/AboutUs';
import Reviews from '@components/Reviews/Reviews';
import Contacts from '@components/Contacts/Contacts';

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      {/* <Reviews /> */}
      <Contacts />
      
    </>
  );
}
