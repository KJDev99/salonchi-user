import CartScreen from "@/screens/cart";
import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import React from "react";

export default function Cart() {
  return (
    <>
      <Head>
        <title>Xuping | Savatcha</title>
        <meta
          name="description"
          content="Xuping Счастья, эмоции, подарки и всё что угодно Бесплатная доставка по всему Узбекистану"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <CartScreen />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ["common"])),
    },
  };
};
