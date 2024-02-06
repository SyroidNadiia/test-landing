import styles from './Typography.module.scss';

const variantsMapping = {
  heading1: 'h1',
  heading2: 'h2',
  heading3: 'h3',
  heading4: 'h4',
  heading5: 'h5',
  subheding1: 'p',
  subheding2: 'p',
  subheding3: 'p',
  subheding4: 'p',
} as const;

interface Props {
  variant?: keyof typeof variantsMapping;
  color?: string;
  className?: string;
  children?: React.ReactNode;
  title?: string;
}

const Typography: React.FC<Props> = ({
  variant,
  color,
  children,
  className,
  title,
  ...props
}) => {
  const Component = variant ? variantsMapping[variant] : 'p';

  const textClassName = `${
    variant ? styles[`typography--variant-${variant}`] : ''
  } ${className || ''}`;

  return (
    <Component
      className={textClassName}
      {...props}
      style={{ color }}
      title={title}
    >
      {children}
    </Component>
  );
};

Typography.displayName = 'Typography';

export default Typography;
