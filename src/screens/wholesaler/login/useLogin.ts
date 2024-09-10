import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { formSchema } from "./form.schema";
import { useMutation, useQuery } from "@tanstack/react-query";
import { login } from "@/shared/modules/auth";
import { useRouter } from "next/router";
import { toast } from "react-hot-toast";
import { REACT_QUERY_KEYS } from "@/constants/react-query-keys";
import { request } from "@/shared/api/requests";
import { useState } from "react";

interface FormTypes {
  password: string;
  phone: string;
}

export const useLogin = () => {
  const router = useRouter();
  const [status,setStatus] = useState<any | null>(false);
  const form = useForm<FormTypes>({
    resolver: yupResolver(formSchema),
  });

  const { mutate, isLoading } = useMutation((data) => login(data), {
    onSuccess: (res) => {
      localStorage.setItem("userData", JSON.stringify(res?.data));
      if (localStorage.getItem("cart_location")) {
        router.push("/cart");
      } else {
        router.push("/");
      }
    },
    onError: (err: any) => {
      if (err?.response?.data?.phone) {
        toast.error("Bu raqam ro`yxatdan o`tmagan!");
      } else if (err?.response?.data?.password) {
        toast.error("Parol noto'g'ri");
      } else {
        // toast.success(err?.response?.data?.detail);
        if(err?.response?.data?.detail === "Sizga hali ruxsat berilmadi, Tez orada sizga aloqaga chiqamiz!"){
           router.push("/wholesaler/pending")
        }
      
      }
    },
  });



  const onSubmit = (data: FormTypes) => {
    const payload: FormTypes | any = {
      phone: data.phone?.replaceAll(" ", ""),
      password: data?.password,
      is_wholesaler: true,
    };
    mutate(payload);
  };

  return {
    onSubmit,
    form,
    isLoading,
  };
};
