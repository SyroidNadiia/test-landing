import { inter } from '@app/fonts';
import Typography from '@components/Typography/Typography';

import styles from './AdvantageItem.module.scss';

interface AdvantageItemProps {
  id: number;
  title: string;
  description: string;
}

const AdvantageItem: React.FC<AdvantageItemProps> = ({
  id,
  title,
  description,
}) => {
  return (
    <li
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
        color="var(--cl-white)"
        className={`${inter.className} ${styles.advantageDescription}`}
      >
        {description}
      </Typography>
    </li>
  );
};

export default AdvantageItem;
