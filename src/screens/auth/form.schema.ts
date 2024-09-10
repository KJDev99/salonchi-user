import * as yup from "yup";

export const formSchema = yup.object().shape({
  firstname: yup
    .string()
    .nullable()
    .required("Ushbu maydon to`ldirilshi shart!"),
  phone: yup.string().nullable().required("Ushbu maydon to`ldirilshi shart!"),
  password: yup
    .string()
    .nullable()
    .min(8)
    .required("Ushbu maydon to`ldirilshi shart!"),
  confirm_password: yup
    .string()
    .oneOf([yup.ref("password")], "Parollar mos emas!")
    .required("Ushbu maydon to`ldirilshi shart!"),
});
