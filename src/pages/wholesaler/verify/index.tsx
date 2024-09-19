import React from "react";
import Head from "next/head";
import VerifyScreen from "@/screens/wholesaler/verify/screen";

export default function Verify() {
  return (
    <>
      <Head>
        <title>Salonchi | Verify</title>
        <meta
          name="description"
          content="SalonchiСчастья, эмоции, подарки и всё что угодно Бесплатная доставка по всему Узбекистану"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <VerifyScreen />
    </>
  );
}
