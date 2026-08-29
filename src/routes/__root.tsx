import {
  Link,
  Outlet,
  createRootRouteWithContext,
} from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import type { SessionState } from '@/features/auth';
import type { QueryClient } from '@tanstack/react-query';
import { AuthLayout } from '@/app/router/layout/AuthLayout';
import { Toaster } from '@/shared/ui/toast';

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient;
  auth: SessionState;
}>()({
  component: RootComponent,
  notFoundComponent: () => {
    return (
      <div>
        <p>This is the notFoundComponent configured on root route</p>
        <Link to='/'>Start Over</Link>
      </div>
    );
  },
});

function RootComponent() {
  return (
    <>
      <div className='p-2 flex gap-2 text-lg'>
        <Link
          to='/'
          activeProps={{
            className: 'font-bold',
          }}
          activeOptions={{ exact: true }}
        >
          Home
        </Link>{' '}
        <Link
          to='/sign-in'
          activeProps={{
            className: 'font-bold',
          }}
        >
          Sign-in
        </Link>{' '}
        <Link
          to='/sign-up'
          activeProps={{
            className: 'font-bold',
          }}
        >
          Sign up
        </Link>{' '}
        <Link
          to='/home'
          activeProps={{
            className: 'font-bold',
          }}
        >
          Dashboard home
        </Link>
        {/* <Link
          to=''
          activeProps={{
            className: 'font-bold',
          }}
        >
          Logout
        </Link> */}
      </div>
      <hr />
      <div className='layout max-w-[1920px] m-auto px-4'>
        <AuthLayout>
          <Outlet />
          <Toaster />
          <TanStackRouterDevtools />
          <ReactQueryDevtools />
        </AuthLayout>
      </div>
    </>
  );
}
