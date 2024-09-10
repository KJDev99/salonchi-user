import React from "react";
import Head from "next/head";
import ForgetPasswordScreen from "@/screens/wholesaler/forget-password/screen";

export default function ForgetPassword() {
  return (
    <>
      <Head>
        <title>Xuping | Forget password</title>
        <meta
          name="description"
          content="Xuping Счастья, эмоции, подарки и всё что угодно Бесплатная доставка по всему Узбекистану"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <ForgetPasswordScreen />
    </>
  );
}
