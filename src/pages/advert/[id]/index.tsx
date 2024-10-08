import Advertising from "@/screens/advert";
import Head from "next/head";
import React from "react";
import { useRouter } from "next/router";
const Advert = () => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Salonchi | Advertising</title>
        <meta
          name="description"
          content="Salonchi Счастья, эмоции, подарки и всё что угодно Бесплатная доставка по всему Узбекистану"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <Advertising id={router.query.id} />
    </>
  );
};

export default Advert;
