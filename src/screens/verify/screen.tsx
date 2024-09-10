import React, { useEffect, useState } from "react";
import { Title, Wrapper } from "../auth/style";
import { Button, Text } from "@mantine/core";
import { Form } from "@/styles/global";
import { PinInput } from "@/components/pin-input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchema } from "./form.schema";
import { useMutation } from "@tanstack/react-query";
import { verify } from "@/shared/modules/auth";
import { Notifications } from "@/components/notifications";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import Link from "next/link";
import { IconLogo } from "@/assets/icons/logo";

const VerifyScreen = () => {
  const router = useRouter();
  const [user, setUser] = useState<any | null>(null);
  const form = useForm({
    resolver: yupResolver(formSchema),
  });

  useEffect(() => {
    if (typeof window !== undefined) {
      setUser(JSON.parse(localStorage.getItem("userInfos") as string));
    }
  }, []);

  const { mutate, isLoading } = useMutation((data) => verify(data), {
    onSuccess: (res) => {
      localStorage.setItem("userData", JSON.stringify(res?.data));
      Notifications({ title: "Verify", message: res?.data?.message });
      if (localStorage.getItem("cart_location")) {
        router.push("/cart");
      } else {
        router.push("/");
      }
    },
    onError: (err: any) => {
      toast.error(err?.response?.data?.detail);
    },
  });

  const onSubmit = (data: any) => {
    const payload: any = {
      phone: user?.phone,
      code: data.code,
    };
    mutate(payload);
  };
  return (
    <Wrapper>
      <Form onSubmit={form.handleSubmit(onSubmit)}>
        <IconLogo />
        <Title className="sign-in-title extra-title">Tasdiqlash</Title>
        <p className="recode-link">
          Telefon raqamingizga yuborilgan 4 xonali kodni kiriting
        </p>
        <PinInput control={form.control} name="code" className="pin-input" />
        <Text className="recode-link">
          Agar kod kelmagan bo‘lsa <Link href="/">qayta yuborishni</Link> bosing
        </Text>
        <Button color="red" type="submit" loading={isLoading}>
          Davom etish
        </Button>
      </Form>
    </Wrapper>
  );
};

export default VerifyScreen;
