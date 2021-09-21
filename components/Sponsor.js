import Image from 'next/image';
import styles from '../styles/Sponsor.module.scss';
const IMAGE_SIZE = '150 vw';

export default function Sponsor({ src, title, description }) {
  return (
    <div className={styles.sponsorContainer}>
      <Image
        src={src}
        alt={title}
        width={IMAGE_SIZE}
        height={IMAGE_SIZE}
        loader={() => src}
      />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
