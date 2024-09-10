import React from "react";
import Head from "next/head";
import FlowScreen from "@/screens/flow";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Flow = () => {
  return (
    <>
      <Head>
        <title>Xuping | Details</title>
        <meta
          name="description"
          content="Xuping Счастья, эмоции, подарки и всё что угодно Бесплатная доставка по всему Узбекистану"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <FlowScreen />
    </>
  );
};

export default Flow;

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
