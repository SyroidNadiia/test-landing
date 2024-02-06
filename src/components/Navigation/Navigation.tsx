import React from 'react';
import { Link as LinkScroll } from 'react-scroll';

import styles from './Navigation.module.scss';

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
    [główna]: 'główna',
    [oNas]: 'oNas',
    [recenzje]: 'recenzje',
    [kontakty]: 'kontakty',
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

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <nav>
      <ul className={styles.navList}>
        {Object.keys(navLinks).map(key => (
          <li key={key} className={styles.navItem}>
            <LinkScroll
              to={navLinks[key]}
              smooth={true}
              duration={500}
              onClick={handleClick}
            >
              {key}
            </LinkScroll>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
