import Container from '@components/Container/Container';
import styles from './Footer.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import logo_main from '@images/logo/logo_main.svg';
import Typography from '@components/Typography/Typography';
import { AiOutlineCopyrightCircle } from 'react-icons/ai';
import { inter } from '@app/fonts';

const Footer = () => {
  return (
    <footer>
      <Container>
        <div className={styles.footerWrapper}>
          <Link href={`/`} className={`${styles.logo} ${styles.main}`}>
            <Image
              src={logo_main}
              alt="logo"
              style={{ width: 104, height: 32 }}
              priority
            />
          </Link>

          <div className={styles.footerCopyright}>
            <Typography
              variant="subheding4"
              color="var(--cl-main)"
              className={inter.className}
            >
              confetti
              <AiOutlineCopyrightCircle
                style={{
                  width: 15,
                  height: 15,
                  marginLeft: '8px',
                  marginRight: '8px',
                }}
              />
              2023
            </Typography>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
