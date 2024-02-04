import React from 'react';
import { useToggle } from 'usehooks-ts';
import styles from './Navigation.module.scss';
import Link from 'next/link';

interface NavigationPropsI {
  className?: string;
  onClick?: () => void;
}

export interface NavDictI {
  główna: string;
  oNas: string;
  recenzje: string;
  kontakty: string;
}

export const generateNavLinks = ({
  główna,
  oNas,
  recenzje,
  kontakty,
}: NavDictI) => {
  return {
    [główna]: '#główna',
    [oNas]: '#oNas',
    [recenzje]: '#recenzje',
    [kontakty]: '#kontakty',
  };
};

const Navigation: React.FC<NavigationPropsI> = ({ className, onClick }) => {

  const navDict: NavDictI = {
    główna: 'główna',  
    oNas: 'oNas',      
    recenzje: 'recenzje', 
    kontakty: 'kontakty', 
  };

  const navLinks = generateNavLinks(navDict);

  return (
    <nav>
      <ul className={styles.navList}>
        {Object.keys(navLinks).map(key => (
          <li key={key} className={styles.navItem}>
            <Link href={navLinks[key]}>{key}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
            