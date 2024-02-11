'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { PiCirclesFourFill } from 'react-icons/pi';
import { TbSquareRoundedLetterX } from 'react-icons/tb';
import { Link as LinkScroll } from 'react-scroll';
import Navigation from '@components/Navigation/Navigation';
import logo_main from '@images/logo/logo_main.svg';
import logo_second from '@images/logo/logo_second.svg';

import Container from '../Container/Container';

import styles from './Header.module.scss';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [originalOverflow, setOriginalOverflow] = useState('');

  useEffect(() => {
    // const handleBodyScroll = () => {
    //   if (isMobileMenuOpen) {
    //     setOriginalOverflow(document.body.style.overflow);
    //     document.body.style.overflow = 'hidden';
    //   } else {
    //     document.body.style.overflow = originalOverflow;
    //   }
    // };

    window.addEventListener('keydown', onEscKeydown);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('keydown', onEscKeydown);
      window.addEventListener('scroll', handleScroll);
      document.body.style.overflow = originalOverflow;
    };
  }, [isMobileMenuOpen, originalOverflow]);

  const toggleMenuOpen = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);

    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  const onEscKeydown = (e: KeyboardEvent) => {
    if (e.code === 'Escape') {
      setIsMobileMenuOpen(false);
    }
  };

  const handleScroll = () => {
    const offset = window.scrollY;
    setIsScrolled(offset > 50);
  };

  return (
    <header
      className={`${styles.header} ${
        isScrolled && !isMobileMenuOpen ? styles.scrolled : ''
      }
      ${isMobileMenuOpen ? styles.fixed : ''}`}
    >
      <Container className={styles.headerContainer}>
        {isScrolled && !isMobileMenuOpen && (
          <LinkScroll
            to="Hero"
            smooth={true}
            duration={500}
            className={styles.headerLink}
          >
            <button
              type="button"
              className={styles.menuButton}
              onClick={toggleMenuOpen}
              aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              <PiCirclesFourFill className={styles.headerMenuLink} />
            </button>
          </LinkScroll>
        )}

        {/* Logo */}
        <Link
          href={`/`}
          className={`${styles.logo} ${
            isMobileMenuOpen ? styles.second : styles.main
          } `}
        >
          <Image
            src={isMobileMenuOpen ? logo_second : logo_main}
            alt="logo"
            style={{ width: 104, height: isMobileMenuOpen ? 28 : 32 }}
            priority
          />
        </Link>

        {isMobileMenuOpen ? (
          <TbSquareRoundedLetterX
            className={`${styles.closeIcon} ${
              isMobileMenuOpen ? styles.fixed : ''
            }`}
            onClick={toggleMenuOpen}
            aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
          />
        ) : (
          <button
            type="button"
            className={styles.menuIcon}
            onClick={toggleMenuOpen}
            aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
          >
            menu
            <PiCirclesFourFill
              style={{ width: 24, height: 24 }}
              className={styles.headerMenuIcon}
            />
          </button>
        )}

        {/* burger menu */}
        <div
          className={`${styles.burgerMenu} ${
            isMobileMenuOpen ? styles.isOpen : ''
          }`}
        >
          <Container>
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
