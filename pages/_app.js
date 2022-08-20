import {SessionProvider} from 'next-auth/react';
import '../styles/globals.css';
import {userLoginContext} from '../context/userLoginContext';
import { useSession } from 'next-auth/react';

export default function App({Component, pageProps: {session, ...pageProps}}) {
  return ( 
    <SessionProvider session={session}>
      <userLoginContext.Provider value={session}>
        <Component {...pageProps} />
      </userLoginContext.Provider>
    </SessionProvider>
  );
}
