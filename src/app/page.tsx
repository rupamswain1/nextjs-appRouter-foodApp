import styles from './page.module.css';
import Button from '@/components/Button/Button';
import Footer from '@/components/Footer/Footer';
import SlideShow from '@/components/SlideShow/SlideShow';
import Burger from '../../public/assets/burger.jpg';
import Curry from '../../public/assets/curry.jpg';
import Dumplings from '../../public/assets/dumplings.jpg';
import Macncheese from '../../public/assets/macncheese.jpg';
import Pizza from '../../public/assets/pizza.jpg';
import TomatoSalad from '../../public/assets/tomato-salad.jpg';
export default function Home() {
  const slideImages = [
    {
      src: Burger,
      alt: 'Burger',
    },
    {
      src: Curry,
      alt: 'Curry',
    },
    {
      src: Dumplings,
      alt: 'Dumplings',
    },
    {
      src: Macncheese,
      alt: 'Mac N Cheese',
    },
    {
      src: Pizza,
      alt: 'Pizza',
    },
    {
      src: TomatoSalad,
      alt: 'Tomato Salad',
    },
  ];
  return (
    <>
      <header className={styles.header}>
        <div className={styles.imageSlide}>
          <SlideShow images={slideImages} time={5000} />
        </div>
        <div className={styles.cta}>
          <div>
            <div className={`${styles.homeHeader} highlightedText`}>
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
          <h2 className="subHeaderText2">How it works</h2>
          <p className="pageContent">
            {' '}
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p className="pageContent">
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>
        <section className={styles.description}>
          <h2 className="subHeaderText2">Why NextLevel Food?</h2>
          <p className="pageContent">
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p className="pageContent">
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
