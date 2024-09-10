import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { formSchema } from "./form.schema";
import { useMutation } from "@tanstack/react-query";
import { forgotPassword } from "@/shared/modules/auth";
import { useRouter } from "next/router";
import { toast } from "react-hot-toast";

interface FormTypes {
  phone: string;
}

export const useLogin = () => {
  const router = useRouter();
  const form = useForm<FormTypes>({
    resolver: yupResolver(formSchema),
  });

  const { mutate, isLoading } = useMutation((data) => forgotPassword(data), {
    onSuccess: (res) => {
      localStorage.setItem("userInfos", JSON.stringify(res?.data));
      router.push("/wholesaler/verify-code");
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
