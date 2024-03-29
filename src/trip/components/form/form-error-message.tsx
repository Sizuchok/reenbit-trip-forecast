import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const FormErrorMessage = ({ children }: Props) => {
  return <p className="text-xs mt-1 text-red-600">{children}</p>
}

export default FormErrorMessage
