// src/pages/_app.tsx
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { useEffect } from 'react';
import theme from '../theme';
import supabase from '../utils/supabaseClient';
import { useStore } from '../store/useStore';

export default function MyApp({ Component, pageProps }: AppProps) {
  const { setUser } = useStore();

  useEffect(() => {
    // Get initial session
    const syncUser = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (session?.user) {
        setUser({
          id: session.user.id,
          email: session.user.email || '',
          family_id: session.user.user_metadata?.family_id || 'demo123',
        });
      } else {
        setUser(null);
      }
    };

    syncUser();

    // Set up real-time session listener
    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        if (session?.user) {
          setUser({
            id: session.user.id,
            email: session.user.email || '',
            family_id: session.user.user_metadata?.family_id || 'demo123',
          });
        } else {
          setUser(null);
        }
      }
    );

    return () => {
      // Cleanup auth listener
      listener?.subscription?.unsubscribe?.();
    };
  }, [setUser]);

  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
