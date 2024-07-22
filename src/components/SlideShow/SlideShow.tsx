'use client';
import Image, { StaticImageData } from 'next/image';
import styles from './SlideShow.module.css';
import { useEffect, useState } from 'react';

interface slideProps {
  images: {
    src: StaticImageData;
    alt: string;
  }[];
  time: number;
}

const SlideShow: React.FunctionComponent<slideProps> = ({ images, time }) => {
  const [activeImage, setActiveImage] = useState(0);
  useEffect(() => {
    const imageInterval = setInterval(() => {
      setActiveImage((prev) => {
        if (prev === images.length - 1) {
          return 0;
        } else {
          return prev + 1;
        }
      });
    }, time);

    return () => clearInterval(imageInterval);
  }, [time, images]);
  return (
    <div className={styles.slideContainer}>
      {images.map(({ src, alt }, index) => {
        return (
          index === activeImage && (
            <Image
              className={[styles.slideImages].join(' ')}
              src={src}
              alt={alt}
            />
          )
        );
      })}
    </div>
  );
};

export default SlideShow;
