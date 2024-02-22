import { ButtonHTMLAttributes, forwardRef } from 'react'
import { cn } from '../utils/class-names.util'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'default' | 'outline'
}

const Button = forwardRef<HTMLButtonElement, Props>(
  ({ variant = 'default', className, children, ...props }: Props, ref) => {
    const variants = {
      default: 'bg-blue-600 text-white shadow hover:bg-blue-700',
      outline: 'border border-input bg-background shadow-sm hover:bg-gray-200',
    } as const

    return (
      <button
        className={cn(
          'h-9 px-4 py-2 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors disabled:pointer-events-none disabled:opacity-50',
          variants[variant],
          className,
        )}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    )
  },
)

export default Button
