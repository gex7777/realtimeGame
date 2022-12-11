import "../styles/globals.css";
import type { AppProps } from "next/app";
import { App as Konsta } from "konsta/react";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { useState } from "react";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import Layout from "./../components/Layout";
export default function App({ Component, pageProps }: AppProps) {
  const [supabase] = useState(() => createBrowserSupabaseClient());
  return (
    <SessionContextProvider
      supabaseClient={supabase}
      initialSession={pageProps.initialSession}
    >
      <Konsta>
        <Layout>
          {" "}
          <Component {...pageProps} />
        </Layout>
      </Konsta>
    </SessionContextProvider>
  );
}
