import Container from '@components/Container/Container';
import Section from '@components/Section/Section';
import Typography from '@components/Typography/Typography';

import styles from './Hero.module.scss';

interface HeroProps {
  id: string;
}

const Hero: React.FC<HeroProps> = ({ id }) => {
  return (
    <Section id={id}>
        <div className={styles.heroOverlay}>
          <Typography
            variant="heading1"
            color="var(--cl-accent)"
            className={styles.heroTitle}
          >
            Tworzymy unikalne <br /> i niepowtarzalne <br />
            <span className={styles.heroText}>dekoracje balonowe</span>
            <br /> na imprezy
          </Typography>
        </div>
    </Section>
  );
};

export default Hero;
