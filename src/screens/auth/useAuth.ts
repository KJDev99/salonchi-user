import { Notifications } from "@/components/notifications";
import { useRegions } from "@/hooks/useRegions";
import { register } from "@/shared/modules/auth";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { toast } from "react-hot-toast";

export const useAuth = () => {
  const router = useRouter();
  const regions = useRegions();

  const { mutate, isLoading } = useMutation((data) => register(data), {
    onSuccess: (res) => {
      localStorage.setItem("userInfos", JSON.stringify(res?.data));
      Notifications({
        title: "Register",
        message: "Foydalanuvchi muvaffaqiyatli yaratildi",
      });
      router.push("/verify");
    },
    onError: (err: any) => {
      toast.error(err?.response?.data?.detail);
    },
  });

  const onSubmit = (data: any) => {
    mutate({
      ...data,
      phone: data.phone?.replaceAll(" ", ""),
    });
  };

  return {
    regions,
    onSubmit,
    isLoading,
  };
};
