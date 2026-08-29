import { routeTree } from '@/routeTree.gen';
import { QueryClient } from '@tanstack/react-query';
import { createRouter } from '@tanstack/react-router';

export const queryClient = new QueryClient();

export const router = createRouter({
  routeTree,
  context: {
    queryClient,
    auth: undefined!,
  },
  defaultPreload: 'intent',
  defaultPreloadStaleTime: 0,
  scrollRestoration: true,
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
