// import Container from '@components/Container/Container';
// import Section from '@components/Section/Section';
// import styles from './InformationForm.module.scss';
// import Input from '@components/Input/Input';

// const InformationForm = () => {

//     const formControl = useForm<CheckoutFormValues>({
//       mode: 'onBlur',
//       defaultValues: {},
//       resolver: yupResolver(validationSchema(errorMessages)),
//     });

//     const {
//       register,
//       handleSubmit,
//       formState: { errors, isValid },
//       setError,
//       setValue,
//     } = formControl;

//     const onSubmit = async (dataForm: CheckoutFormValues) => {
//     const newOrder = buildOrderData({
//       dataForm,
//       cartProducts,
//       cartTotalPrice,
//       dictParam
//     });
        
//   return (
//     <Section>
//       <Container>
//         <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
//           <div className={styles.contactInfo__wrapper}>
//             <Input
//               label='Imię*'
//               placeholder='Imię'
//               id="user_firstName"
//               required
//               errorMessage={errors.firstName?.message}
//               error={errors.firstName}
//               {...register('firstName')}
//             />
//             <Input
//               label='E-mail*'
//               type="email"
//               placeholder='mail@gmail.com'
//               id="user_email"
//               required
//               errorMessage={errors.email?.message}
//               error={errors.email}
//               {...register('email')}
//             />

//             <Input
//               label='Wiadomość'
//               {...register('notes')}
//               placeholder='Twoja wiadomość...'
//               multiline
//               value={orderNotes}
//               onChange={event => handleOrderNotesChange(event)}
//               height="218px"
//               errorMessage={errors?.notes?.message}
//               error={errors?.notes}
//             />
//           </div>

//           <Button
//             variant="primary"
//             type="submit"
//             className={styles.button}
//             disabled={!!errors?.email || state.isLoading}
//             isLoading={state.isLoading}
//           >
//             Wyślij
//           </Button>
//         </form>
//       </Container>
//     </Section>
//   );
// };

// export default InformationForm;
