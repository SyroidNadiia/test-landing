'use client';

import Container from '@components/Container/Container';
import Section from '@components/Section/Section';
import styles from './Reviews.module.scss';
import Typography from '@components/Typography/Typography';
import ReusableSlider from '@components/shared/ReusableSlider/ReusableSlider';
import { useRef, useState } from 'react';
import Slider from 'react-slick';
import { generateReviewCards } from './reviewsCard';
import { inter } from '@app/fonts';
import { BiUserPin } from 'react-icons/bi';

const Reviews = () => {
  const sliderRef = useRef<Slider | null>(null);
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const reviewData = generateReviewCards();

  return (
    <Section>
      <Container>
        <Typography
          variant="heading2"
          color="var(--cl-accent)"
          className={styles.reviewsTitle}
        >
          Recenzje
        </Typography>
        <div className={styles.body}>
          <ReusableSlider
            ref={sliderRef}
            beforeChange={(prev, next) => setCurrentSlide(next)}
            dotsStyles={styles.dots}
            dots
          >
            {reviewData.map(({ id, content, author }) => (
              <div key={id} className={styles.slider_body}>
                <div className={`${styles.reviewElement} ${styles.content}`}>
                  <Typography
                    variant="subheding3"
                    color="var(--cl-white)"
                    className={styles.reviewTitle}
                  >
                    {content}
                  </Typography>
                  <div className={styles.reviewAuthor}>
                    <BiUserPin
                      style={{ width: 24, height: 24 }}
                      fill="var(--cl-accent)"
                      className={styles.reviewIcon}
                    />
                    <Typography
                      variant="subheding4"
                      className={`${inter.className} ${styles.reviewDescription}`}
                      color="var(--cl-white)"
                    >
                      {author}
                    </Typography>
                  </div>
                </div>
              </div>
            ))}
          </ReusableSlider>
        </div>
      </Container>
    </Section>
  );
};

export default Reviews;
