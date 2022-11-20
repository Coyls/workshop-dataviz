import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { StrictMode } from "react";
import { ScrollProvider } from "../components/scroll-context.context";
import { ButtonsProvider } from "../components/buttons-provider/buttonts-provider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StrictMode>
      <ScrollProvider>
        <ButtonsProvider>
          <Component {...pageProps} />
        </ButtonsProvider>
      </ScrollProvider>
    </StrictMode>
  );
}
