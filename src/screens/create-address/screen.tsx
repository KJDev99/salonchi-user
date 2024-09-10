import { Select } from "@/components/select";
import { Form } from "@/styles/global";
import React from "react";
import { useConfirm } from "./useConfirm";
import { Input } from "@/components/input";
import { Title, Wrapper } from "../auth/style";
import Image from "next/image";
import IconLogo from "@/assets/images/logo.svg";
import { Button } from "@mantine/core";
import Link from "next/link";

const CreateAddressScreen = () => {
  const { form, onAddress, regionsList, districtList, isLoading } =
    useConfirm();

  return (
    <Wrapper>
      <Form onSubmit={form.handleSubmit(onAddress)}>
        <Link href="/">
          <Image src={IconLogo} alt="logo" width={149} height={60} />
        </Link>
        <Title className="sign-in-title">Manzil yaratish</Title>
        <Select
          label="Viloyatingiz*"
          placeholder="Viloyatingiz*"
          name="region"
          control={form.control}
          data={regionsList}
          nothingFound="Nothing found"
        />
        <Select
          label="Shahar/Tumaningiz*"
          placeholder="Shahar/Tumaningiz*"
          name="district"
          control={form.control}
          data={districtList}
          nothingFound="Nothing found"
        />
        <Input
          type="text"
          label="Ko‘changiz*"
          placeholder="Ko‘changiz*"
          name="street"
          control={form.control}
        />
        <Input
          type="text"
          label="Uy manzilingiz*"
          placeholder="Uy manzilingiz*"
          name="home"
          control={form.control}
        />
        <Button color="red" type="submit" loading={isLoading}>
          Keyingisi
        </Button>
      </Form>
    </Wrapper>
  );
};

export default CreateAddressScreen;
