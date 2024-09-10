import * as yup from 'yup';

export const formSchema = yup.object().shape({
  // region: yup.string().nullable().required('Ushbu maydon to`ldirilshi shart!'),
  // district: yup
  //   .string()
  //   .nullable()
  //   .required('Ushbu maydon to`ldirilshi shart!'),
  street: yup.string().nullable().required('Ushbu maydon to`ldirilshi shart!'),
  home: yup.string().nullable().required('Ushbu maydon to`ldirilshi shart!'),
});
