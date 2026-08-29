import { RouterProvider } from '@tanstack/react-router';
import { QueryClientProvider } from '@tanstack/react-query';
import { useAuthStore } from '@/features/auth';
import { queryClient } from '@/routes/router';
import { AuthProvider } from '@/app/providers/AuthProvider';
import { router } from '@/routes/router';

export const App = () => {
  const auth = useAuthStore();
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider
          router={router}
          context={{ auth }}
        />
      </AuthProvider>
    </QueryClientProvider>
  );
};
