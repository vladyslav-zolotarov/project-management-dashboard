import { Button } from '@/shared/ui/button';
import { FieldGroup, Field, FieldLabel, FieldError } from '@/shared/ui/field';
import { Input } from '@/shared/ui/input';
import { Controller, useForm } from 'react-hook-form';
import { SignInSchema, useSignIn, type SignInType } from '@/features/auth';
import { zodResolver } from '@hookform/resolvers/zod';
import { PasswordInput } from '@/shared/components';

export const SignInForm = () => {
  const { mutate } = useSignIn();

  const form = useForm<SignInType>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  function onSubmit(data: SignInType) {
    mutate(data);
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <FieldGroup>
        <Controller
          name='email'
          control={form.control}
          render={({ field, fieldState }) => (
            <Field>
              <FieldLabel htmlFor='fieldgroup-email'>Email</FieldLabel>
              <Input
                {...field}
                aria-invalid={fieldState.invalid}
                id='fieldgroup-email'
                type='email'
                placeholder='john@doe.com'
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller
          name='password'
          control={form.control}
          render={({ field, fieldState }) => (
            <Field>
              <FieldLabel htmlFor='fieldgroup-password'>Password</FieldLabel>
              <PasswordInput
                {...field}
                aria-invalid={fieldState.invalid}
                id='fieldgroup-password'
                placeholder='Create a strong password'
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Field
          className='flex items-center justify-content justify-center'
          orientation='horizontal'
        >
          <Button
            className='w-full'
            size='lg'
            type='submit'
            disabled={form.formState.isDirty && !form.formState.isValid}
          >
            Sign in
          </Button>
        </Field>
      </FieldGroup>
    </form>
  );
};
