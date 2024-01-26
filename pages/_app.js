import { SessionProvider } from "next-auth/react";
import "../styles/globals.css";
import { userLoginContext } from "../context/userLoginContext";
import { useSession } from "next-auth/react";
import { ChakraProvider } from "@chakra-ui/react";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <userLoginContext.Provider value={session}>
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
      </userLoginContext.Provider>
    </SessionProvider>
  );
}
