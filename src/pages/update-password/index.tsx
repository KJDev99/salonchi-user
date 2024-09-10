import React from "react";
import Head from "next/head";
import CreatePasswordScreen from "@/screens/create-password";

const UpdatePassword = () => {
  return (
    <>
      <Head>
        <title>Xuping | Parolni yangilash</title>
        <meta
          name="description"
          content="Xuping Счастья, эмоции, подарки и всё что угодно Бесплатная доставка по всему Узбекистану"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <CreatePasswordScreen />
    </>
  );
};

export default UpdatePassword;
