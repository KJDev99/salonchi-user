import React from "react";
import ProductScreen from "@/screens/product";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";

const Product = () => {
  return (
    <>
      <Head>
        <title>Salonchi | Details</title>
        <meta
          name="description"
          content="SalonchiСчастья, эмоции, подарки и всё что угодно Бесплатная доставка по всему Узбекистану"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <ProductScreen />
    </>
  );
};

export default Product;

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
