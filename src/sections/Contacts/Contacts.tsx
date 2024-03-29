import Link from 'next/link';
import { BsTelephone } from 'react-icons/bs';
import { IoMailOutline } from 'react-icons/io5';
import { inter } from '@app/fonts';
import Container from '@components/Container/Container';
import InformationForm from '@components/InformationForm/InformationForm';
import Section from '@components/Section/Section';
import Typography from '@components/Typography/Typography';

import styles from './Contacts.module.scss';

const PHONE_NUMBER = '+48 793 351 407';
const EMAIL_ADDRESS = 'confettibalony@gmail.com';

interface ContactsProps {
  id: string;
}

const Contacts: React.FC<ContactsProps> = ({ id }) => {
  return (
    <Section id={id}>
      <Container className={styles.contactsContainer}>
        <div className={styles.contactsWrapper}>
          <div className={styles.addressWrapper}>
            <Typography
              variant="heading4"
              color="var(--cl-accent)"
              className={styles.addressTitle}
            >
              Kontakty
            </Typography>

            <Typography
              variant="heading5"
              color="var(--cl-main)"
              className={styles.addressDescription}
            >
              Confetti - Studio <br />
              Dekoracij Balonami <br />
              Warszawa
            </Typography>

            <address>
              <ul className={styles.addressList}>
                <li className={styles.addressItem}>
                  <BsTelephone
                    style={{ width: 24, height: 24 }}
                    fill="var(--cl-main)"
                    className={styles.addressIcon}
                  />
                  <Link
                    href={`tel:${PHONE_NUMBER}`}
                    className={`${styles.addressLink} ${inter.className}`}
                  >
                    {PHONE_NUMBER}
                  </Link>
                </li>
                <li className={styles.addressItem}>
                  <IoMailOutline
                    style={{ width: 24, height: 24 }}
                    fill="var(--cl-main)"
                    className={styles.addressIcon}
                  />
                  <Link
                    href={`mailto:${EMAIL_ADDRESS}`}
                    className={`${styles.addressLink} ${inter.className}`}
                  >
                    {EMAIL_ADDRESS}
                  </Link>
                </li>
              </ul>
            </address>
          </div>
          <InformationForm />
        </div>
      </Container>
    </Section>
  );
};

export default Contacts;
