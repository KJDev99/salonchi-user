import React from "react";
import { Title, Wrapper } from "../auth/style";
import { Form } from "@/styles/global";
import { Button } from "@mantine/core";
import { PhoneInput } from "@/components/phone-input";
import { useLogin } from "./useLogin";
import { IconLogo } from "@/assets/icons/logo";
import { InputPassword } from "@/components/input/input.password";
import Link from "next/link";

const LoginScreen = () => {
  const { onSubmit, form, isLoading } = useLogin();

  return (
    <Wrapper>
      <Form onSubmit={form.handleSubmit(onSubmit)}>
        <IconLogo />
        <Title className="sign-in-title">Kirish</Title>
        <PhoneInput
          label="Raqamingiz*"
          placeholder="Raqamingiz*"
          name="phone"
          control={form.control}
          className="phone-input"
        />
        <InputPassword
          name="password"
          control={form.control}
          placeholder="Parolni kiriting*"
          label="Parolni kiriting*"
        />
        <Link href="/forget-password" className="forget-password-link">
          Parolni unutdingizmi?
        </Link>
        <Button color="red" type="submit" loading={isLoading}>
          Kirish
        </Button>
        <Link href="/wholesaler/register" className="signin-link">
          Ro‘yxatdan o‘tish
        </Link>
      </Form>
    </Wrapper>
  );
};

export default LoginScreen;
