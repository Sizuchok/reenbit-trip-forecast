import { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import { AuthContext } from '../../../auth/components/auth-context'

const MainLayout = () => {
  const { user } = useContext(AuthContext)

  return (
    <div className="grid bg-white text-black h-screen w-screen">
      <header className="h-14 border-b-2 flex justify-between items-center px-6">
        <span className="font-medium">{user?.name ?? 'Unauthorized'}</span>
        <div className="size-10">
          <img
            src={user?.picture}
            alt="user profile picture"
            className="size-full object-cover rounded-full"
          />
        </div>
      </header>
      <div className="max-w-[87.5rem] mx-auto">
        <Outlet />
      </div>
    </div>
  )
}
export default MainLayout
