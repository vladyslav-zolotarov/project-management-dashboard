import { Button } from '@/shared/ui/button';
import { GithubIcon } from '@/shared/components';
import { useOAuth } from '@/features/auth';

export const GithubButton = () => {
  const { mutate } = useOAuth();

  return (
    <Button
      variant='outline'
      size='lg'
      className='w-[calc(50%-12px)] md:w-1/2'
      type='submit'
      onClick={() => mutate('github')}
    >
      <GithubIcon className='w-10 h-10' />
      Github
    </Button>
  );
};
