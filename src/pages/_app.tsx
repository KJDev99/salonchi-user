import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { Layout } from "@/layout";
import { appWithTranslation } from "next-i18next";
import NextNProgress from "nextjs-progressbar";
import { Toaster } from "react-hot-toast";
import Head from "next/head";
import { queryClientConfig } from "@/config/react-query";

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient(queryClientConfig));

  return (
    <>
      <Head>
        <title>Salonchi</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <QueryClientProvider client={queryClient}>
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            colorScheme: "light",
            colors: {
              red: [
                "var(--main-bg-color)",
                "var(--main-bg-color)",
                "var(--main-bg-color)",
                "var(--main-bg-color)",
                "var(--main-bg-color)",
                "var(--main-bg-color)",
                "var(--main-bg-color)",
                "var(--main-bg-color)",
                "var(--main-bg-color)",
                "var(--main-bg-color)",
              ],
            },
          }}
        >
          <Toaster position="top-right" reverseOrder={false} />
          <Layout>
            <NextNProgress
              color="var(--main-bg-color)"
              startPosition={0.3}
              stopDelayMs={3}
              height={3}
              showOnShallow={true}
              transformCSS={(css) => {
                return <style>{css}</style>;
              }}
              options={{ easing: "ease", speed: 500, showSpinner: false }}
              nonce="my-nonce"
            />
            <Component {...pageProps} />
          </Layout>
        </MantineProvider>
      </QueryClientProvider>
    </>
  );
}

export default appWithTranslation(MyApp);
