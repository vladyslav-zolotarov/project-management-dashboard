import { FieldGroup, FieldSeparator } from '@/shared/ui/field';
import { Card, CardFooter, CardHeader, CardTitle } from '@/shared/ui/card';
import { SignInForm } from '@/features/auth';
import { GithubButton, GoogleButton } from '@/shared/components';
import { Link } from '@tanstack/react-router';

export const SignInPage = () => {
  return (
    <Card className='flex flex-col gap-8 w-full max-w-md rounded-lg bg-white p-4 md:p-8'>
      <CardHeader className='flex flex-col justify-center gap-2 p-0'>
        <CardTitle className='text-3xl font-bold'>Sign in</CardTitle>
      </CardHeader>
      <SignInForm />
      <FieldSeparator>or continue with</FieldSeparator>
      <FieldGroup className='flex flex-row items-center justify-center'>
        <GoogleButton />
        <GithubButton />
      </FieldGroup>
      <CardFooter className='flex flex-col items-center justify-center gap-2 p-0'>
        <p>
          New here?{' '}
          <Link
            to='/sign-up'
            className='underline'
          >
            Start building your workspace
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
};
