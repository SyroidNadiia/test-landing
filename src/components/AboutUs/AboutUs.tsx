'use client';

import { useRef, useState } from 'react';
import Slider from 'react-slick';
import { inter } from '@app/fonts';
import Container from '@components/Container/Container';
import ReusableSlider from '@components/ReusableSlider/ReusableSlider';
import Section from '@components/Section/Section';
import Typography from '@components/Typography/Typography';
import { useWindowSize } from 'usehooks-ts';

import AdvantageItem from './AdvantageItem/AdvantageItem';
import { generateAdvantageCards } from './advantageCard';

import styles from './AboutUs.module.scss';

interface AboutUsProps {
  id: string;
}

const AboutUs: React.FC<AboutUsProps> = ({ id }) => {
  const sliderRef = useRef<Slider | null>(null);
  const advantageData = generateAdvantageCards();
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const { width } = useWindowSize() || {};
  const isMobScreen = width < 767 && width !== undefined;

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, '');
    const elem = document.getElementById(targetId);
    window.scrollTo({
      top: elem?.getBoundingClientRect().top,
      behavior: 'smooth',
    });
  };

  return (
    <Section id={id}>
      <Container className={styles.aboutUsContainer}>
        <Typography
          variant="heading2"
          color="var(--cl-main)"
          className={styles.aboutUsTitle}
        >
          kreatywny zespół dekoratorów
        </Typography>
        <Typography
          variant="subheding1"
          className={`${inter.className} ${styles.aboutUsDescription}`}
          color="var(--cl-extra-text)"
        >
          Młodzi i energiczni, rozwijający działalność w zakresie tworzenia
          dekoracji na imprezy i wydarzenia
        </Typography>
        {isMobScreen ? (
          <ul className={styles.advantageList}>
            <ReusableSlider
              ref={sliderRef}
              beforeChange={(prev, next) => setCurrentSlide(next)}
              dotsStyles={styles.dots}
              dots
            >
              {advantageData.map(({ id, title, description }) => (
                <AdvantageItem
                  key={id}
                  id={id}
                  title={title}
                  description={description}
                />
              ))}
            </ReusableSlider>
          </ul>
        ) : (
          <ul className={styles.advantageList}>
            {advantageData.map(({ id, title, description }) => (
              <AdvantageItem
                key={id}
                id={id}
                title={title}
                description={description}
              />
            ))}
          </ul>
        )}
      </Container>
    </Section>
  );
};

export default AboutUs;
