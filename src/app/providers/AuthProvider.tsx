import { useEffect } from 'react';
import { useAuthStore } from '@/features/auth';
import { createClient } from '@/shared/lib/supabase/client';

const supabase = createClient();

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const session = useAuthStore(state => state.session);
  const setSession = useAuthStore(state => state.setSession);
  const isLoading = useAuthStore(state => state.isLoading);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => setSession(data.session));

    const { data: subscription } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session);
      }
    );

    return () => subscription.subscription.unsubscribe();
  }, [setSession]);

  useEffect(() => {
    console.log('session', session);
  }, [session]);

  if (isLoading) {
    return isLoading;
  }

  return children;
}
