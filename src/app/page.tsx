import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';
export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.imageSlide}></div>
        <div className={styles.cta}>
          <div>
            <div className={styles.homeHeader}>
              <div>NEXTLEVEL FOOD FOR</div>
              <div>NEXTLEVEL FOODIES</div>
            </div>
            <div className={styles.homeSubHeader}>
              Taste & share foof from all over the world
            </div>
          </div>
          <div>
            <div>Join the community</div>
            <div>Explore meals</div>
          </div>
        </div>
      </header>
      <main></main>
    </>
  );
}
