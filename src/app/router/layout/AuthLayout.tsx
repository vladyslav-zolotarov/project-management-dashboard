import { Logo } from '@/shared/components/common/Logo';

export const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex min-h-screen py-4'>
      <div className='flex flex-col justify-center items-center w-full background-gradient'>
        <Logo />
        {children}
        <div className='bg--primaryGray mt-4 text-center text-sm flex items-center justify-center'>
          &copy; {new Date().getFullYear()} Silhoette PMD. All rights reserved.
        </div>
      </div>
    </div>
  );
};
