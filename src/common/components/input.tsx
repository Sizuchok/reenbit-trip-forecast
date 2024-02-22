import { InputHTMLAttributes, forwardRef } from 'react'
import { cn } from '../utils/class-names.util'

type Props = InputHTMLAttributes<HTMLInputElement>

const Input = forwardRef<HTMLInputElement, Props>(({ className, type, ...props }: Props, ref) => {
  return (
    <input
      type={type}
      className={cn(
        'flex h-9 w-full rounded-md border bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1 focus:border-blue-400 disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      ref={ref}
      {...props}
    />
  )
})

export default Input
