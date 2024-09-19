import CreatePasswordScreen from "@/screens/create-password";
import Head from "next/head";
import React from "react";

export default function CreatePassword() {
  return (
    <>
      <Head>
        <title>Salonchi | Create password</title>
        <meta
          name="description"
          content="SalonchiСчастья, эмоции, подарки и всё что угодно Бесплатная доставка по всему Узбекистану"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <CreatePasswordScreen />
    </>
  );
}
