import { createFileRoute, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/_dashboard')({
  beforeLoad: ({ context }) => {
    if (!context.auth.session) {
      throw redirect({ to: '/sign-in' });
    }
  },
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello Dashboard Home</div>;
}
