import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { StrictMode } from "react";
import { ScrollProvider } from "../components/scroll-context.context";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StrictMode>
      <ScrollProvider>
        <Component {...pageProps} />
      </ScrollProvider>
    </StrictMode>
  );
}
