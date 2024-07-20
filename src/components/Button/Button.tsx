import styles from './Button.module.css';

interface ButtonProps {
  type: 'primary' | 'secondary' | undefined;
  text: string;
  className?: string;
}
const Button: React.FunctionComponent<ButtonProps> = ({
  type,
  text,
  className,
}) => {
  return (
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
