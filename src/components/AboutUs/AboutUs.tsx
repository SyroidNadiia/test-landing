'use client';

import Container from '@components/Container/Container';
import Section from '@components/Section/Section';
import styles from './AboutUs.module.scss';
import Typography from '@components/Typography/Typography';
import Slider from 'react-slick';
import { inter } from '@app/fonts';
import ReusableSlider from '@components/shared/ReusableSlider/ReusableSlider';
import { useRef, useState } from 'react';
import { generateAdvantageCards } from './advantageCard';

interface AboutUsProps {
  id: string;
}

const AboutUs: React.FC<AboutUsProps> = ({ id }) => {
  const sliderRef = useRef<Slider | null>(null);
  const advantageData = generateAdvantageCards();
  const [currentSlide, setCurrentSlide] = useState<number>(0);

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
    <Section  id={id}>
      <Container>
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
        <ul className={styles.advantageList}>
          <ReusableSlider
            ref={sliderRef}
            beforeChange={(prev, next) => setCurrentSlide(next)}
            dotsStyles={styles.dots}
            dots
          >
            {advantageData.map(({ id, title, description }) => (
              <li
                key={id}
                className={`${styles.slider_body} ${styles.advantageElement} ${
                  styles[`color-${id}`]
                }`}
              >
                <Typography
                  variant="heading3"
                  color="var(--cl-white)"
                  className={styles.advantageTitle}
                >
                  {title}
                </Typography>
                <Typography
                  variant="subheding2"
                  className={inter.className}
                  color="var(--cl-white)"
                >
                  {description}
                </Typography>
              </li>
            ))}
          </ReusableSlider>
        </ul>
      </Container>
    </Section>
  );
};

export default AboutUs;
