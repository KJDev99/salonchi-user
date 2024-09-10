import * as yup from 'yup';

export const formSchema = yup.object().shape({
  code: yup
    .string()
    .nullable()
    .min(4)
    .required('Ushbu maydon to`ldirilishi shart!'),
});
