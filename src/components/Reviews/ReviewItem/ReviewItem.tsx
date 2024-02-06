import { BiUserPin } from 'react-icons/bi';
import { inter } from '@app/fonts';
import Typography from '@components/Typography/Typography';

import styles from './ReviewItem.module.scss';

interface ReviewItemProps {
  id: number;
  content: string;
  author: string;
}

const ReviewItem: React.FC<ReviewItemProps> = ({ id, content, author }) => {
  return (
    <li key={id} className={styles.slider_body}>
      <div className={styles.reviewElement}>
        <Typography
          variant="subheding3"
          color="var(--cl-main)"
          className={`${inter.className} ${styles.reviewTitle}`}
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
            color="var(--cl-extra-text)"
          >
            {author}
          </Typography>
        </div>
      </div>
    </li>
  );
};

export default ReviewItem;
