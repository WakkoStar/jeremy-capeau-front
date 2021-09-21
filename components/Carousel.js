import { useEffect, useState } from 'react';
import styles from '../styles/Carousel.module.scss';

export default function Carousel({ imageUrls }) {
  const [index, setIndex] = useState(0);
  const [style, setStyle] = useState('carouselContainer');
  useEffect(() => {
    const timeout = setTimeout(() => {
      setTimeout(() => {
        setTimeout(() => {
          setIndex(index == imageUrls.length - 1 ? 0 : index + 1);
        }, 400);
        setStyle('carouselContainer');
      }, 10000);
      setStyle('carouselContainerSelected');
    }, 400);

    return () => clearTimeout(timeout);
  }, [index, imageUrls.length]);

  return (
    <div className={styles[style]}>
      <img src={imageUrls[index]} />
    </div>
  );
}
