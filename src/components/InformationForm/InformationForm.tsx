'use client';
import Container from '@components/Container/Container';
import Section from '@components/Section/Section';
import styles from './InformationForm.module.scss';
import Input from '@components/Input/Input';
import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import validationSchema, {
  InformationFormValidation,
} from '@helpers/formValidationSchema';
import { useState } from 'react';
import Button from '@components/Button/Button';

export interface InformationFormValues {
  firstName: string;
  email: string;
  notes?: string | undefined;
}

interface ErrorMessages {
  firstName: string;
  email: string;
  notes?: string;
}

const errorMessages: InformationFormValidation = {
  firstNameReq: 'Nieprawidłowe Іmię',
  emailReq: 'Nieprawidłowy email',
  validEmail: 'Nieprawidłowy email',
  notesReq: '',
};

const InformationForm = () => {
  const [orderNotes, setOrderNotes] = useState<string>('');

  const formControl = useForm<InformationFormValues>({
    mode: 'onBlur',
    defaultValues: {},
    resolver: yupResolver(validationSchema(errorMessages)),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setError,
    setValue,
  } = formControl;

  const onSubmit = async (dataForm: InformationFormValues) => {
    console.log(dataForm);
  };

  const handleOrderNotesChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setOrderNotes(event.target.value);
  };

  return (
    <Section className={styles.sectionForm}>
      <Container>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.formWrapper}>
            <Input
              label="Imię*"
              placeholder="Imię"
              id="user_firstName"
              required
              errorMessage={errors.firstName?.message}
              error={errors.firstName}
              {...register('firstName')}
            />
            <Input
              label="E-mail*"
              type="email"
              placeholder="mail@gmail.com"
              id="user_email"
              required
              errorMessage={errors.email?.message}
              error={errors.email}
              {...register('email')}
            />

            <Input
              label="Wiadomość"
              {...register('notes')}
              placeholder="Twoja wiadomość..."
              multiline
              value={orderNotes}
              onChange={event => handleOrderNotesChange(event)}
              height="128px"
              errorMessage={errors?.notes?.message}
              error={errors?.notes}
            />
          </div>

          <Button
            type="submit"
            className={styles.button}
            disabled={!!errors?.email}
          >
            Wyślij
          </Button>
        </form>
      </Container>
    </Section>
  );
};

export default InformationForm;
