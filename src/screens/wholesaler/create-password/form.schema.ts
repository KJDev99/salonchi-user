import * as yup from "yup";

export const formSchema = yup.object().shape({
  password: yup
    .string()
    .min(4)
    .max(32)
    .nullable()
    .required("Ushbu maydon to`ldirilishi shart!"),
  confirm_password: yup
    .string()
    .oneOf([yup.ref("password")], "Parollar mos emas!")
    .required("Ushbu maydon to`ldirilshi shart!"),
});
