import { NotFoundScreen } from "@/screens/404";
import Head from "next/head";
import React from "react";

export default function NotFound() {
  return (
    <>
      <Head>
        <title>Salonchi | Sahifa topilmadi</title>
        <meta
          name="description"
          content="SalonchiСчастья, эмоции, подарки и всё что угодно Бесплатная доставка по всему Узбекистану"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <NotFoundScreen />
    </>
  );
}
