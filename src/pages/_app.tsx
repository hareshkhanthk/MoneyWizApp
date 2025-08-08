// src/pages/_app.tsx
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useStore } from '../store/useStore';
import { Session, onAuthStateChange, getSession } from '@supabase/auth-helpers-nextjs';
import supabase from '../utils/supabaseClient';
import theme from '../theme';

function MyApp({ Component, pageProps }: AppProps) {
  const { setUser } = useStore();

  useEffect(() => {
    // Get current session on first load
    const getUserSession = async () => {
      const {
         { session },
      } = await supabase.auth.getSession();

      if (session?.user) {
        setUser({
          id: session.user.id,
          email: session.user.email,
          family_id: session.user.user_metadata.family_id || 'default',
        });
      }
    };

    getUserSession();

    // Subscribe to auth changes (sign in/out)
    const { data: authListener } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (session?.user) {
        setUser({
          id: session.user.id,
          email: session.user.email,
          family_id: session.user.user_metadata.family_id || 'default',
        });
      } else {
        setUser(null);
      }
    });

    // Cleanup listener
    return () => {
      if (authListener && authListener.subscription) {
        authListener.subscription.unsubscribe();
      }
    };
  }, [setUser]);

  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
