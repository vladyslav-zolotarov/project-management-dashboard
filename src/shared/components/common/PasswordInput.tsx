import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from '@/shared/ui/input-group';
import { forwardRef, useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { Input } from '@/shared/ui/input';
import { Button } from '@/shared/ui/button';
import { cn } from '@/shared/lib/utils/shadcn';
import type { ComponentProps } from 'react';

type PasswordInputProps = Omit<ComponentProps<typeof Input>, 'type'>;

export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ className, ...props }, ref) => {
    const [isVisible, setIsVisible] = useState(false);

    return (
      <InputGroup>
        <InputGroupInput
          type={isVisible ? 'text' : 'password'}
          className={cn('pr-10', className)}
          ref={ref}
          {...props}
        />
        <InputGroupAddon align='inline-end'>
          <Button
            type='button'
            variant='ghost'
            size='icon'
            className='absolute right-0 top-0 h-full px-3 text-muted-foreground hover:bg-transparent'
            onClick={() => setIsVisible(prev => !prev)}
            tabIndex={-1}
            aria-label={isVisible ? 'Hide password' : 'Show password'}
          >
            {isVisible ? (
              <EyeOff className='size-4' />
            ) : (
              <Eye className='size-4' />
            )}
          </Button>
        </InputGroupAddon>
      </InputGroup>
    );
  }
);

PasswordInput.displayName = 'PasswordInput';
