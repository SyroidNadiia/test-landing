import styles from './Button.module.scss';

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
  children?: React.ReactNode;
  variant?: 'primary';
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<Props> = ({
  disabled,
  children,
  onClick,
  variant = 'primary',
  className,

  ...rest
}) => {
  const buttonClass = `${styles.button} ${styles[variant]} ${className || ''}`;

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      {...rest}
      className={buttonClass}
    >
      {children}
    </button>
  );
};

Button.displayName = 'Button';

export default Button;
