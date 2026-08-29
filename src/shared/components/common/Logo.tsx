import { Card } from '@/shared/ui/card';
import { SilhoetteIcon } from '@/shared/components';

export const Logo = () => {
  return (
    <div className='logo flex items-center gap-2 w-full max-w-md mb-4'>
      <Card className='w-11 h-11 bg-white rounded-md flex items-center justify-center p-0'>
        <SilhoetteIcon className='w-7 h-7' />
      </Card>
      <div className='flex flex-col gap-1'>
        <span className='text-lg font-bold leading-none'>Silhoette PMD</span>
        <span className='text-xs text-gray-500 leading-none'>
          Management dashboard
        </span>
      </div>
    </div>
  );
};
