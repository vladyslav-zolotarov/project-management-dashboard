import { Button } from '@/shared/ui/button';
import { GoogleIcon } from '@/shared/components';
import { useOAuth } from '@/features/auth';

export const GoogleButton = () => {
  const { mutate } = useOAuth();

  return (
    <Button
      variant='outline'
      size='lg'
      className='w-[calc(50%-12px)] md:w-1/2'
      type='submit'
      onClick={() => mutate('google')}
    >
      <GoogleIcon />
      Google
    </Button>
  );
};
