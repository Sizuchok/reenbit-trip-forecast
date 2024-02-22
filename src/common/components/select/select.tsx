import { SelectHTMLAttributes, forwardRef } from 'react'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { cn } from '../../utils/class-names.util'

type Props = SelectHTMLAttributes<HTMLSelectElement>

const Select = forwardRef<HTMLSelectElement, Props>(
  ({ className, children, ...props }: Props, ref) => {
    return (
      <div className="relative">
        <select
          className={cn(
            'flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border bg-transparent px-4 py-2 text-sm shadow-sm focus:outline-none focus:ring-1 focus:border-blue-400 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 appearance-none',
            className,
          )}
          ref={ref}
          {...props}
        >
          {children}
        </select>
        <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
          <MdKeyboardArrowDown className="size-5" />
        </div>
      </div>
    )
  },
)
export default Select
