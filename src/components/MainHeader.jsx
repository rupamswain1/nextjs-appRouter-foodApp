import Link from 'next/link';
import logoImg from '../../public/assets/logo.png';
import styles from './MainHeader.module.css';
const MainHeader = () => {
  return (
    <header className={styles.headerContainer}>
      <Link href="/" className={`${styles.logo} headerText`}>
        <img src={logoImg.src} alt="Food App home" />
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
  );
};

export default MainHeader;
