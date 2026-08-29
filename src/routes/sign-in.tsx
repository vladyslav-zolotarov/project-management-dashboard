import { SignInPage } from '@/pages';
import { createFileRoute, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/sign-in')({
  beforeLoad: ({ context }) => {
    if (context.auth.session) {
      throw redirect({ to: '/home' });
    }
  },
  component: SignInPage,
});
