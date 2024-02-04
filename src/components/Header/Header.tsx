'use client';
import Image from 'next/image';
import { PiCirclesFourFill } from 'react-icons/pi';
import Link from 'next/link';
import { TbSquareRoundedLetterX } from 'react-icons/tb';

import Container from '../Container/Container';

import logo_main from '@images/logo/logo_main.svg';
import logo_second from '@images/logo/logo_second.svg';
import styles from './Header.module.scss';
import { useEffect, useState } from 'react';
import Navigation from '@components/Navigation/Navigation';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenuOpen = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const html = document.querySelector('html');

    if (html) {
      if (isMobileMenuOpen) {
        html.classList.add(styles.overflowHidden);
      } else {
        html.classList.remove(styles.overflowHidden);
      }
    }
  }, [isMobileMenuOpen]);

  return (
    <header className={styles.header}>
      <Container className={styles.headerContainer}>
          {/* Logo */}
          {isMobileMenuOpen ? (
            <Link href={`/`} className={`${styles.logo} ${styles.second}`}>
              <Image
                src={logo_second}
                alt="logo"
                width={104}
                height={32}
                priority
              />
            </Link>
          ) : (
            <Link href={`/`} className={`${styles.logo} ${styles.main}`}>
              <Image
                src={logo_main}
                alt="logo"
                width={104}
                height={32}
                priority
              />
            </Link>
          )}

          <button
            type="button"
            className={styles.menuIcon}
            onClick={toggleMenuOpen}
            aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
          >
            menu
            <PiCirclesFourFill />
          </button>
      

        {/* burger menu */}
        <div
          className={`${styles.burgerMenu} ${
            isMobileMenuOpen && styles.isOpen
          }`}
        >
          <Container>
            <TbSquareRoundedLetterX
              className={styles.closeIcon}
              onClick={toggleMenuOpen}
              aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            />

            <Navigation
              className={styles.mobileMenu}
              onClick={toggleMenuOpen}
            />
          </Container>
        </div>
      </Container>
    </header>
  );
};

export default Header;
