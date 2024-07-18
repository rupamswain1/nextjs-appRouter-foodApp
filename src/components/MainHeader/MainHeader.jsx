import Link from 'next/link';
import Image from 'next/image';
import logoImg from '../../../public/assets/logo.png';
import styles from './MainHeader.module.css';
import MainHeaderBackGround from './MainHeaderBackground';
import NavLinks from './NavLinks.';
const MainHeader = () => {
  const navLinks = [
    {
      name: 'Browse Meals',
      href: '/meals',
    },
    {
      name: 'Foodies Community',
      href: '/community',
    },
  ];
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
            {navLinks.map((linkData) => (
              <li key={linkData.name}>
                <NavLinks {...linkData} />
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MainHeader;
