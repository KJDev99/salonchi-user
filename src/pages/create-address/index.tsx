import CreateAddressScreen from "@/screens/create-address/screen";
import Head from "next/head";
import React from "react";

const CreateAddress = () => {
  return (
    <>
      <Head>
        <title>Xuping | Address yaratish</title>
        <meta
          name="description"
          content="Xuping Счастья, эмоции, подарки и всё что угодно Бесплатная доставка по всему Узбекистану"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <CreateAddressScreen />
    </>
  );
};

export default CreateAddress;
