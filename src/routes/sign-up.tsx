import { SignUpPage } from '@/pages';
import { createFileRoute, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/sign-up')({
  beforeLoad: ({ context }) => {
    if (context.auth.session) {
      throw redirect({ to: '/home' });
    }
  },
  component: SignUpPage,
});
