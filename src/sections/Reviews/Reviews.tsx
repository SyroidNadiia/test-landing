'use client';

import { useEffect, useRef, useState } from 'react';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';
import Slider from 'react-slick';
import Container from '@components/Container/Container';
import ReusableSlider from '@components/ReusableSlider/ReusableSlider';
import ReviewItem from '@components/ReviewItem/ReviewItem';
import Section from '@components/Section/Section';
import Typography from '@components/Typography/Typography';
import reviewsData from '@data/data.json';

import styles from './Reviews.module.scss';

interface ReviewsProps {
  id: string;
}

export interface ReviewContent {
  id: number;
  content: string;
  author: string;
}

const Reviews: React.FC<ReviewsProps> = ({ id }) => {
  const sliderRef2 = useRef<Slider | null>(null);
  const [currentSlide2, setCurrentSlide2] = useState<number>(0);

  const [slidesToShow, setSlidesToShow] = useState(1);
  const reviews = reviewsData.reviews;

  const generateReviewCards = (): ReviewContent[] => {
    return reviews.map((review, index) => ({
      id: index + 1,
      content: review.content,
      author: review.author,
    }));
  };

  const reviewData = generateReviewCards();

  const disablePrevButton = currentSlide2 === 0;
  const disableNextButton = currentSlide2 === reviewData.length - 1;
  const handlePrevClick = () => {
    if (sliderRef2.current) {
      sliderRef2.current.slickPrev();
    }
  };

  const handleNextClick = () => {
    if (sliderRef2.current) {
      sliderRef2.current.slickNext();
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleResize = (width: number) => {
    if (width >= 1440) {
      setSlidesToShow(reviewData.length);
    } else if (width >= 768 && width < 1439) {
      setSlidesToShow(2);
    } else {
      setSlidesToShow(1);
    }
  };

  useEffect(() => {
    const initialWidth = window.innerWidth;
    handleResize(initialWidth);

    window.addEventListener('resize', () => {
      handleResize(window.innerWidth);
    });

    return () => {
      window.removeEventListener('resize', () => {
        handleResize(window.innerWidth);
      });
    };
  }, [handleResize]);

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
      <Container className={styles.reviewsContainer}>
        <Typography
          variant="heading2"
          color="var(--cl-accent)"
          className={styles.reviewsTitle}
        >
          Recenzje
        </Typography>

        <ul className={styles.reviewsList}>
          <ReusableSlider
            ref={sliderRef2}
            beforeChange={(prev, next) => setCurrentSlide2(next)}
            dotsStyles={styles.dots}
            dots
            infinite={true}
            slidesToShow={slidesToShow}
          >
            {reviewData.map(({ id, content, author }) => (
              <ReviewItem key={id} id={id} content={content} author={author} />
            ))}
          </ReusableSlider>
        </ul>
        <div className={styles.controls}>
          <button
            type="button"
            onClick={handlePrevClick}
            className={`${styles.prevButton} ${
              disablePrevButton ? styles.disabled : ''
            }`}
            disabled={disablePrevButton}
            aria-label="Previous Slide"
          >
            <HiOutlineChevronLeft
              className={styles.arrowIcon}
              style={{ width: 24, height: 24 }}
            />
          </button>
          <button
            type="button"
            onClick={handleNextClick}
            className={`${styles.nextButton} ${
              disableNextButton ? styles.disabled : ''
            }`}
            disabled={disableNextButton}
            aria-label="Next Slide"
          >
            <HiOutlineChevronRight
              className={styles.arrowIcon}
              style={{ width: 24, height: 24 }}
            />
          </button>
        </div>
      </Container>
    </Section>
  );
};

export default Reviews;
