import Container from '@components/Container/Container';
import styles from './Hero.module.scss';

interface HeroProps {
  id: string;
}

const Hero: React.FC<HeroProps> = ({ id }) => {
  return (
    <Container>
      <div className={styles.heroOverlay} id={id}>
        <h1 className={styles.heroTitle}>
          Tworzymy unikalne i niepowtarzalne{' '}
          <span className={styles.heroText}>dekoracje balonowe</span> na imprezy
        </h1>
      </div>
    </Container>
  );
};

export default Hero;
