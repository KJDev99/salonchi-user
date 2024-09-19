import { Container, Wrapper } from "@/styles/global";
import React from "react";
import { Title } from "./style";
import { TabsLayout } from "./components/tabs";
import { FormProvider, useForm } from "react-hook-form";

const ProfileScreen = () => {
  const form = useForm();

  return (
    <FormProvider {...form}>
      <Wrapper>
        <Container>
          <Title>Profil</Title>
          <TabsLayout />
        </Container>
      </Wrapper>
    </FormProvider>
  );
};

export default ProfileScreen;
