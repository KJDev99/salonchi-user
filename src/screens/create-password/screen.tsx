import React from "react";
import { Title, Wrapper } from "../auth/style";
import { Form } from "@/styles/global";
import { Button, Text } from "@mantine/core";
import { useForm } from "react-hook-form";
import { InputPassword } from "@/components/input/input.password";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchema } from "./form.schema";
import { IconLogo } from "@/assets/icons/logo";
import { useMutation } from "@tanstack/react-query";
import { request } from "@/shared/api/requests";
import { Notifications } from "@/components/notifications";
import { useRouter } from "next/router";
import toast from "react-hot-toast";

const CreatePasswordScreen = () => {
  const router = useRouter();
  const form = useForm({
    resolver: yupResolver(formSchema),
  });

  const { mutate, isLoading } = useMutation(
    (data) =>
      request.post(
        `user/recover/forgot/password/${router?.query?.client}`,
        data
      ),
    {
      onSuccess: (res) => {
        Notifications({
          title: "Parol yangilandi",
          message: "Parol muvaffaqiyatli yangilandi",
        });
        router.push("/login");
      },
      onError: (err: any) => {
        toast.error(err?.response?.data?.detail);
      },
    }
  );

  const onSubmit = (data: any) => {
    mutate(data);
  };

  return (
    <Wrapper>
      <Form onSubmit={form.handleSubmit(onSubmit)}>
        <IconLogo />
        <Title className="sign-in-title">Parolni yangilash</Title>
        <Text className="recode-link forget">
          Kirish uchun yangi parol o‘rnating
        </Text>
        <InputPassword
          control={form.control}
          name="password"
          label="Yangi parolni kiriting*"
          placeholder="Yangi parolni kiriting*"
        />
        <InputPassword
          control={form.control}
          name="confirm_password"
          label="Parolni qaytadan kiriting*"
          placeholder="Parolni qaytadan kiriting*"
        />
        <Button color="red" type="submit" loading={isLoading}>
          Parolni yangilash
        </Button>
      </Form>
    </Wrapper>
  );
};

export default CreatePasswordScreen;
