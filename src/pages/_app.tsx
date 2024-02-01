import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import store from "@/store/store";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
      <SessionProvider session={session}>
        <ChakraProvider>
          <Provider store={store}>
          <Component {...pageProps} />
          </Provider>
        </ChakraProvider>
      </SessionProvider>
  );
}
