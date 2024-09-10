import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { formSchema } from "./form.schema";
import { useMutation } from "@tanstack/react-query";
import { forgotPassword } from "@/shared/modules/auth";
import { useRouter } from "next/router";
import { toast } from "react-hot-toast";
import { useState } from "react";

interface FormTypes {
  phone: string;
}

export const useLogin = () => {
  const router = useRouter();
  const[phones,setPhones] = useState('')
  const form = useForm<FormTypes>({
    resolver: yupResolver(formSchema),
  });

  const { mutate, isLoading } = useMutation((data) => forgotPassword(data), {
    onSuccess: (res) => {
      router.push(`/verify-code?phones=${phones}`);
    },
    onError: (err: any) => {
      if (err?.response?.data?.phone) {
        toast.error("Bu raqam ro`yxatdan o`tmagan!");
      } else if (err?.response?.data?.password) {
        toast.error("Parol noto'g'ri");
      } else {
        toast.error(err?.response?.data?.detail);
      }
    },
  });

  const onSubmit = (data: FormTypes) => {
    setPhones(data.phone?.replaceAll(" ", ""))
    const payload: FormTypes | any = {
      phone: data.phone?.replaceAll(" ", ""),
    };
    mutate(payload);
  };

  return {
    onSubmit,
    form,
    isLoading,
  };
};
