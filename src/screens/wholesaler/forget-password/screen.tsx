import React from "react";
import { Title, Wrapper } from "../auth/style";
import { Form } from "@/styles/global";
import { Button, Text } from "@mantine/core";
import { PhoneInput } from "@/components/phone-input";
import { useLogin } from "./useLogin";
import { IconLogo } from "@/assets/icons/logo";

const ForgetPasswordScreen = () => {
  const { onSubmit, form, isLoading } = useLogin();

  return (
    <Wrapper>
      <Form onSubmit={form.handleSubmit(onSubmit)}>
        <IconLogo />
        <Title className="sign-in-title">Parolni unutdingizmi?</Title>
        <Text className="recode-link forget">
          Tasdiqlash jarayoni uchun telefon raqamingizni kiriting,
          <br /> biz sizning telefon raqamingizga 4 raqamli kod yuboramiz.
        </Text>
        <PhoneInput
          label="Raqamingiz*"
          placeholder="Raqamingiz*"
          name="phone"
          control={form.control}
          className="phone-input"
        />
        <Button color="red" type="submit" loading={isLoading}>
          Davom etish
        </Button>
      </Form>
    </Wrapper>
  );
};

export default ForgetPasswordScreen;
