import VerifyCodeScreen from "@/screens/verify-code";
import Head from "next/head";
import React from "react";

export default function VerifyCode() {
  return (
    <>
      <Head>
        <title>Xuping | Verify-Code</title>
        <meta
          name="description"
          content="Xuping Счастья, эмоции, подарки и всё что угодно Бесплатная доставка по всему Узбекистану"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <VerifyCodeScreen />
    </>
  );
}
