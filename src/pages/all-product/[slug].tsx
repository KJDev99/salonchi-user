import AllProductScreen from "@/screens/all-product/screen";
// import CategoriesScreen from "@/screens/categories";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import React from "react";

export async function getStaticPaths() {
  return {
    fallback: "blocking",
    paths: [],
  };
}
export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    fallback: "blocking",
    ...(await serverSideTranslations(locale as string, ["common"])),
  },
});

export default function AllProduct() {
  return (
    <>
      <Head>
        <title>Salonchi | all-products</title>
        <meta
          name="description"
          content="SalonchiСчастья, эмоции, подарки и всё что угодно Бесплатная доставка по всему Узбекистану"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <AllProductScreen />
    </>
  );
}
