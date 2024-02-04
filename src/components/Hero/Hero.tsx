import Container from '@components/Container/Container';
import styles from './Hero.module.scss';
import Section from '@components/Section/Section';

const Hero = () => {
  return (
    <Section className={styles.sectionWrapper}>
      <Container>
        <div className={styles.heroOverlay}>
          <h1 className={styles.heroTitle}>
            Tworzymy unikalne i niepowtarzalne dekoracje balonowe na imprezy
          </h1>
        </div>
      </Container>
    </Section>
  );
};

export default Hero;
