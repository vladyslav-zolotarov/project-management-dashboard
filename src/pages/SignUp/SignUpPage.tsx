import { FieldGroup, FieldSeparator } from '@/shared/ui/field';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/shared/ui/card';
import { SignUpForm } from '@/features/auth';
import { GithubButton, GoogleButton } from '@/shared/components';
import { Link } from '@tanstack/react-router';

export const SignUpPage = () => {
  return (
    <Card className='flex flex-col gap-8 w-full max-w-md rounded-lg bg-white p-4 md:p-8'>
      <CardHeader className='flex flex-col justify-center gap-2 p-0'>
        <CardTitle className='text-3xl font-bold'>Create an account!</CardTitle>
        <CardDescription>
          Create an account and organize projects, tasks, and teams in one
          place.
        </CardDescription>
      </CardHeader>
      <SignUpForm />
      <FieldSeparator>or continue with</FieldSeparator>
      <FieldGroup className='flex flex-row items-center justify-center'>
        <GoogleButton />
        <GithubButton />
      </FieldGroup>
      <CardFooter className='flex flex-col items-center justify-center gap-2 p-0'>
        <p>
          Already have an account?{' '}
          <Link
            to='/sign-in'
            className='underline'
          >
            Sign in
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
};
