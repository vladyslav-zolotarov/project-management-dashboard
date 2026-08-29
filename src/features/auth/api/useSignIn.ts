import { createClient } from '@/shared/lib/supabase/client';
import { useMutation } from '@tanstack/react-query';
import { useAuthStore } from '@/features/auth/store/useAuthStore';
import type { SignInType } from '@/features/auth/index';
import { toast } from '@/shared/ui/toast';
import { useNavigate } from '@tanstack/react-router';

export const useSignIn = () => {
  const navigate = useNavigate();
  const supabase = createClient();
  const setSession = useAuthStore(state => state.setSession);

  return useMutation({
    mutationFn: async (formData: SignInType) => {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      });

      if (error && error?.message) {
        throw error;
      }

      return data;
    },
    onSuccess: data => {
      const session = data?.session ?? null;
      setSession(session);
      navigate({ to: '/home' });
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
