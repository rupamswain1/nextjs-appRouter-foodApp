import Link from 'next/link';
import Image from 'next/image';
import logoImg from '../../../public/assets/logo.png';
import styles from './MainHeader.module.css';
import MainHeaderBackGround from './MainHeaderBackground';
const MainHeader = () => {
  return (
    <>
      <MainHeaderBackGround />
      <header className={styles.headerContainer}>
        <Link href="/" className={`${styles.logo} headerText`}>
          <Image src={logoImg} alt="Food App home" priority />
          Next Level Food
        </Link>
        <nav className={`${styles.nav} subHeaderText`}>
          <ul>
            <li>
              <Link href="/meals">Browse Meals</Link>
            </li>
            <li>
              <Link href="/community">Foodies Community</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MainHeader;
