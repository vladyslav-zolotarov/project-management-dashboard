import { createClient } from '@/shared/lib/supabase/client';
import type { SignUpType } from '@/features/auth/index';
import { useMutation } from '@tanstack/react-query';

export const useSignUp = () => {
  const supabase = createClient();

  return useMutation({
    mutationFn: async (formData: SignUpType) => {
      await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          emailRedirectTo: 'https://example.com/welcome',
        },
      });
    },
    onSuccess: (data, variables, onMutateResult, context) => {
      console.log('onSuccess', data, variables, onMutateResult, context);
    },
    onError: (error, variables, onMutateResult, context) => {
      console.log('onError', error, variables, onMutateResult, context);
    },
  });
};
