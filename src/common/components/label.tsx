import { LabelHTMLAttributes } from 'react'
import { cn } from '../utils/class-names.util'

type Props = LabelHTMLAttributes<HTMLLabelElement> & {
  required?: boolean
}

const Label = ({ required, children, className }: Props) => {
  return (
    <label className={cn('text-sm inline-block mb-2', className)}>
      {required && <span className="text-red-600 mr-1">*</span>}
      {children}
    </label>
  )
}
export default Label
