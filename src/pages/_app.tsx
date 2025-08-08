import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useStore } from '../store/useStore';
import supabase from '../utils/supabaseClient';
import theme from '../theme';

export default function MyApp({ Component, pageProps }: AppProps) {
  const { setUser } = useStore();

  useEffect(() => {
    const syncUser = async () => {
      const {
         { session },
      } = await supabase.auth.getSession();

      if (session?.user) {
        setUser({
          id: session.user.id,
          email: session.user.email,
          family_id: session.user.user_metadata?.family_id || 'default',
        });
      }
    };

    syncUser();

    const {  listener } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        setUser({
          id: session.user.id,
          email: session.user.email,
          family_id: session.user.user_metadata?.family_id || 'default',
        });
      } else {
        setUser(null);
      }
    });

    return () => {
      listener?.subscription?.unsubscribe();
    };
  }, [setUser]);

  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
