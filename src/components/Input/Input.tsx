import React, {
  forwardRef,
  InputHTMLAttributes,
  TextareaHTMLAttributes,
} from 'react';
import { FieldError } from 'react-hook-form/dist/types';
import { inter } from '@app/fonts';

import styles from './Input.module.scss';

type InputProps = {
  width?: string;
  height?: string;
  className?: string;
  placeholder?: string;
  name?: string;
  disabled?: boolean;
  type?: string;
  label?: string;
  error?: FieldError | undefined;
  errorMessage?: string;
  id?: string;
  multiline?: boolean;
  value?: string;
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
};

type InputRefType =
  | React.RefObject<HTMLInputElement>
  | React.RefObject<HTMLTextAreaElement>;

type InputAttributes = InputHTMLAttributes<HTMLInputElement>;
type TextareaAttributes = TextareaHTMLAttributes<HTMLTextAreaElement>;

const Input = forwardRef<InputRefType, InputProps>((props, ref) => {
  const {
    width,
    height,
    className,
    label,
    error,
    errorMessage,
    id,
    multiline = false,
    value,
    ...rest
  } = props;

  const inputClass = `${inter.className || ''} ${styles.input} ${
    error && styles.errorInput
  } ${multiline && styles.textarea}`;

  return (
    <div
      className={`${styles.errorContainer} ${error ? styles.errorVisible : ''}`}
    >
      {label && (
        <label className={`${inter.className} ${styles.label}`} htmlFor={id}>
          {label}
        </label>
      )}
      {multiline ? (
        <textarea
          id={id}
          style={{ width: width, height: height }}
          {...(rest as TextareaAttributes)}
          ref={ref as React.RefObject<HTMLTextAreaElement>}
          className={inputClass}
          aria-label={rest.placeholder || ''}
          value={value}
        />
      ) : (
        <input
          id={id}
          style={{ width: width, height: height }}
          {...(rest as InputAttributes)}
          ref={ref as React.RefObject<HTMLInputElement>}
          className={inputClass}
          aria-label={rest.placeholder || ''}
        />
      )}
      {error && (
        <p className={`${inter.className} ${styles.error}`}>{errorMessage}</p>
      )}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;
