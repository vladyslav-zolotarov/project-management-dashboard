import { Button } from '@/shared/ui/button';
import { FieldGroup, Field, FieldLabel, FieldError } from '@/shared/ui/field';
import { Input } from '@/shared/ui/input';
import { Checkbox } from '@/shared/ui/checkbox';
import { Controller, useForm } from 'react-hook-form';
import { SignUpSchema, useSignUp, type SignUpType } from '@/features/auth';
import { zodResolver } from '@hookform/resolvers/zod';
import { PasswordInput } from '@/shared/components';

export const SignUpForm = () => {
  const { mutate } = useSignUp();

  const form = useForm<SignUpType>({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      passwordConfirm: '',
      terms: false,
    },
  });

  function onSubmit(data: SignUpType) {
    console.log(data);
    mutate(data);
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <FieldGroup>
        <Controller
          name='fullName'
          control={form.control}
          render={({ field, fieldState }) => (
            <Field>
              <FieldLabel htmlFor='fieldgroup-name'>Full Name</FieldLabel>
              <Input
                {...field}
                aria-invalid={fieldState.invalid}
                id='fieldgroup-name'
                type='text'
                placeholder='John Doe'
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
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
        <Controller
          name='passwordConfirm'
          control={form.control}
          render={({ field, fieldState }) => (
            <Field>
              <FieldLabel htmlFor='fieldgroup-confirm-password'>
                Confirm password
              </FieldLabel>
              <PasswordInput
                {...field}
                aria-invalid={fieldState.invalid}
                id='fieldgroup-confirm-password'
                placeholder='Re-enter your password'
              />

              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller
          name='terms'
          control={form.control}
          render={({ field, fieldState }) => (
            <Field
              className='flex items-center mt-4 gap-2'
              orientation='horizontal'
              data-invalid={fieldState.invalid}
            >
              <Checkbox
                id='terms-checkbox'
                name='terms-checkbox'
                aria-invalid={fieldState.invalid}
                checked={field.value}
                onCheckedChange={checked => {
                  field.onChange(checked);
                }}
              />
              <FieldLabel
                htmlFor='terms-checkbox'
                className='inline-block'
              >
                I agree to the{' '}
                <a
                  className='underline'
                  href='/terms'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Terms of Service
                </a>{' '}
                and{' '}
                <a
                  className='underline'
                  href='/privacy'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Privacy Policy
                </a>
              </FieldLabel>
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
            Create Account
          </Button>
        </Field>
      </FieldGroup>
    </form>
  );
};
