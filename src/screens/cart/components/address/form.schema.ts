import * as yup from 'yup';

export const formSchema = yup.object().shape({
  province: yup
    .string()
    .nullable()
    .required('Ushbu maydon to`ldirilshi shart!'),
  region: yup.string().nullable().required('Ushbu maydon to`ldirilshi shart!'),
  street: yup.string().nullable().required('Ushbu maydon to`ldirilshi shart!'),
  home_phone: yup
    .string()
    .nullable()
    .required('Ushbu maydon to`ldirilshi shart!'),
});
