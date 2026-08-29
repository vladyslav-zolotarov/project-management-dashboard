import { z } from 'zod';

export const SignInSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'This field is required. Please enter your email!' })
    .email({ message: 'Invalid email' }),
  password: z
    .string()
    .min(1, {
      message: 'This field is required. Please enter your password!',
    })
    .min(6, {
      message: 'Password should be at least 6 characters.',
    }),
});

export type SignInType = z.infer<typeof SignInSchema>;
