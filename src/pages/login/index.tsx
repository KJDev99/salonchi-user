import LoginScreen from "@/screens/login";
import Head from "next/head";
import React from "react";

export default function Login() {
  return (
    <>
      <Head>
        <title>Xuping | Sign-in</title>
        <meta
          name="description"
          content="Xuping Счастья, эмоции, подарки и всё что угодно Бесплатная доставка по всему Узбекистану"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <LoginScreen />
    </>
  );
}
