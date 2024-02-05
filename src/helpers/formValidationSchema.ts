import { bool, object, string } from 'yup';

const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

export interface InformationFormValidation {
  firstNameReq: string;
  emailReq: string;
  validEmail: string;
  notesReq: string;
}

const validationSchema = (data: InformationFormValidation) => {
  const { firstNameReq, emailReq, validEmail, notesReq } = data;
  return object().shape({
    firstName: string().trim().required(firstNameReq),
    email: string().trim().required(emailReq).matches(emailRegex, validEmail),
    notes: string().trim().max(1000, notesReq),
  });
};

export default validationSchema;
