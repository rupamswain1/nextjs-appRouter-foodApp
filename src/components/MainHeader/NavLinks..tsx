'use client';
import Link from 'next/link';
import styles from './NavLink.module.css';
import { usePathname } from 'next/navigation';
interface Iprops {
  name: string;
  href: string;
}

const NavLinks: React.FunctionComponent<Iprops> = ({ name, href }) => {
  const path = usePathname();
  return (
    <Link
      href={href}
      className={[
        styles.navLink,
        path.startsWith(href) ? styles.active : '',
      ].join(' ')}
    >
      {name}
    </Link>
  );
};

export default NavLinks;
