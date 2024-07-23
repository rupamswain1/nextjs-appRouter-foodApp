import Link from 'next/link';
import styles from './Button.module.css';

interface ButtonProps {
  type?: 'primary' | 'secondary';
  text: string;
  className?: string;
  as: 'link' | 'button';
  href?: string;
}
const Button: React.FunctionComponent<ButtonProps> = ({
  type,
  text,
  className,
  as,
  href,
}) => {
  return as === 'link' && href ? (
    <Link
      href={href}
      className={[
        styles.button,
        type === 'primary' ? styles['btn-primary'] : '',
        className,
      ].join(' ')}
    >
      {text}
    </Link>
  ) : (
    <button
      className={[
        styles.button,
        type === 'primary' ? styles['btn-primary'] : '',
        className,
      ].join(' ')}
    >
      {text}
    </button>
  );
};

export default Button;
