import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const MainLayout = ({ children }: Props) => {
  return (
    <div className="grid bg-white text-black h-screen w-screen">
      <div className="max-w-[87.5rem] m-auto">{children}</div>
    </div>
  )
}
export default MainLayout
