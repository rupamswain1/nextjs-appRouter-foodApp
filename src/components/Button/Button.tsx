import Link from 'next/link';
import styles from './Button.module.css';

interface ButtonProps {
  type?: 'primary' | 'secondary';
  text: string;
  className?: string;
}
interface Links extends ButtonProps {
  as: 'link';
  href: string;
}
interface Btn extends ButtonProps {
  as: 'button';
  onClick?: () => void;
  btnType?:'button'|'submit'|undefined;
  disabled ?:boolean;
}
type props = Links | Btn;
const Button: React.FunctionComponent<props> = (props) => {
  const { type, text, className, as } = props;
  return (as === 'link' && props.href) ? (
    <Link
      href={props.href}
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
      disabled = {'disabled' in props ? props.disabled: false}
      type={'btnType' in props?props.btnType : 'submit'} 
      onClick={'onClick' in props ? props.onClick:()=>{}}
    >
      {text}
    </button>
  );
};

export default Button;
