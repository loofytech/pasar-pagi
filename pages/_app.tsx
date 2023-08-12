import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import NextNProgress from "nextjs-progressbar";

export default function App({ Component, pageProps }: AppProps) {
  return (<>
    <Component {...pageProps} />
    <NextNProgress color="#4D7EFF" />
  </>);
}
