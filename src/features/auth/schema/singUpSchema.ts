import { z } from 'zod';

export const SignUpSchema = z
  .object({
    fullName: z
      .string()
      .min(3, { message: 'This field is required. Please enter your name!' }),
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
    passwordConfirm: z.string().min(1, {
      message: 'This field is required. Please enter your confirm password!',
    }),
    terms: z.boolean().refine(val => val === true, {
      message: 'You must accept the terms and conditions',
    }),
  })
  .refine(data => data.password === data.passwordConfirm, {
    path: ['passwordConfirm'],
    message: "Password don't match",
  });

export type SignUpType = z.infer<typeof SignUpSchema>;
