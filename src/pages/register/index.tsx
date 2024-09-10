import Head from "next/head";
import AuthScreen from "@/screens/auth";

export default function Register() {
  return (
    <>
      <Head>
        <title>Xuping | Ro`yxatdan o`tish</title>
        <meta
          name="description"
          content="Xuping Счастья, эмоции, подарки и всё что угодно Бесплатная доставка по всему Узбекистану"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <AuthScreen />
    </>
  );
}
