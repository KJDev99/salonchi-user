import React from "react";
import { Form, Title, Wrapper } from "./style";
import { useForm } from "react-hook-form";
import { useAuth } from "./useAuth";
import { Input } from "@/components/input";
import { Button } from "@mantine/core";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchema } from "./form.schema";
import { PhoneInput } from "@/components/phone-input";
import { InputPassword } from "@/components/input/input.password";
import { IconLogo } from "@/assets/icons/logo";
import { Select } from "@/components/select";

const AuthScreen = () => {
  const form = useForm({
    resolver: yupResolver(formSchema),
  });
  const { regions, onSubmit, isLoading } = useAuth();

  return (
    <Wrapper>
      <IconLogo />
      <Form onSubmit={form.handleSubmit(onSubmit)}>
        <Title>Ro‘yxatdan o‘tish </Title>
        <Input
          type="text"
          label="Ismi sharifingiz*"
          placeholder="Ismi sharifingiz*"
          name="firstname"
          control={form.control}
        />
        <PhoneInput
          label="Raqamingiz*"
          placeholder="Raqamingiz*"
          name="phone"
          control={form.control}
        />
        <Select
          control={form.control}
          name="region"
          label="Viloyatingiz*"
          placeholder="Viloyatingiz*"
          data={regions}
        />
        <InputPassword
          control={form.control}
          name="password"
          label="Parolni kiriting*"
          placeholder="Parolni kiriting*"
        />
        <InputPassword
          control={form.control}
          name="confirm_password"
          label="Parolni qaytadan kiriting*"
          placeholder="Parolni qaytadan kiriting*"
        />
        <Button color="red" type="submit" loading={isLoading}>
          Davom etish
        </Button>
      </Form>
    </Wrapper>
  );
};

export default AuthScreen;
