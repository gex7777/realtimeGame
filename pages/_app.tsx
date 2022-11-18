import "../styles/globals.css";
import type { AppProps } from "next/app";
import { App as Konsta } from "konsta/react";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Konsta>
      <Component {...pageProps} />
    </Konsta>
  );
}
