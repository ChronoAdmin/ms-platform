import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { AuthProvider } from "../../context/auth";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <Head>
      <title>【エストピア】メンズエステ情報＆検索予約サイト</title>
      <meta name="keywords" content="メンズエステ、メンエス、エステ、メンエス予約" />
    </Head>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </>
  );
}
