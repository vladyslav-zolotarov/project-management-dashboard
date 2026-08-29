import { createClient } from '@/shared/lib/supabase/client';
import { useMutation } from '@tanstack/react-query';
import { toast } from '@/shared/ui/toast';
import type { Provider } from '@supabase/supabase-js';

export const useOAuth = () => {
  const supabase = createClient();

  return useMutation({
    mutationFn: async (provider: Provider) => {
      await supabase.auth.signInWithOAuth({
        provider,
        // options: {
        //   redirectTo: `/home`,
        // },
      });
    },
    onError: error => {
      toast.add({
        type: 'error',
        description: error.message,
        priority: 'high',
      });
    },
  });
};
