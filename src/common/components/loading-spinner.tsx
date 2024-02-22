import { TfiReload } from 'react-icons/tfi'
import { cn } from '../utils/class-names.util'

type Props = {
  className?: string
}

const LoadingSpinner = ({ className }: Props) => {
  return <TfiReload className={cn('animate-spin', className)} />
}
export default LoadingSpinner
