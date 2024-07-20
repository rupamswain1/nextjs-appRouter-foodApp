import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';
import Button from '@/components/Button/Button';
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
          <div className={styles.actionButtons}>
            <Button type="secondary" text="Join the community" />
            <Button
              type="primary"
              text="Explore Meals"
              className={styles.btnPrimarySpace}
            />
          </div>
        </div>
      </header>
      <main>
        <section className={styles.description}>
          <h2>How it works</h2>
          <p>
            {' '}
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>
        <section className={styles.section}>
          <h2>Why NextLevel Food?</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>
      </main>
    </>
  );
}
