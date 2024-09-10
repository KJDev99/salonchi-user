

import React, { useEffect, useState } from "react";
import { Title, Wrapper } from "../auth/style";
import { Button, Text } from "@mantine/core";
import { Form } from "@/styles/global";
import { PinInput } from "@/components/pin-input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchema } from "./form.schema";
import { useMutation, useQuery } from "@tanstack/react-query";
import { verify } from "@/shared/modules/auth";
import { Notifications } from "@/components/notifications";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import Link from "next/link";
import { IconLogo } from "@/assets/icons/logo";
import { request } from "@/shared/api/requests";
import { REACT_QUERY_KEYS } from "@/constants/react-query-keys";

const VerifyCodeScreen = () => {
  const router = useRouter();
  const [user, setUser] = useState<any | null>(null);
  const [status,setStatus] = useState<any | null>(false);
  const form = useForm({
    resolver: yupResolver(formSchema),
  });

  useEffect(() => {
    if (typeof window !== undefined) {
      setUser(JSON.parse(localStorage.getItem("userInfos") as string));
    }
  }, []);

  const { mutate, isLoading } = useMutation(
    (data) => request.post("user/verify/forgot/password", data),
    {
      onSuccess: (res) => {
        Notifications({ title: "Verify", message: res?.data?.message });
        // router.push(`/wholesaler/update-password?client=${res?.data?.id}`);
        setStatus(true)
      },
      onError: (err: any) => {
        toast.error(err?.response?.data?.detail);
      },
    }
  );



  const { data: dataCheckStatus = [], isLoading:CheckStatusLoading } = useQuery({
    queryKey: [REACT_QUERY_KEYS.CHECK_STATUS],
    queryFn: () => request.get('user/check/wholesaler/status') ,
    select: (res) => res,
    onSuccess:(res) => {
     console.log(`res`, res)
    },
    enabled: status,
  });



  const onSubmit = (data: any) => {
    const payload: any = {
      phone: user?.phone,
      code: Number(data.code),
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

export default VerifyCodeScreen;
