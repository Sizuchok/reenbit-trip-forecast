import { useContext } from 'react'
import { IoMdLogOut } from 'react-icons/io'
import { Outlet } from 'react-router-dom'
import { AuthContext } from '../../../auth/components/auth-context'
import { ACCESS_TOKEN } from '../../const/local-storage-keys.const'

const MainLayout = () => {
  const { user, setUser } = useContext(AuthContext)

  return (
    <div className="grid bg-white text-black h-screen w-screen">
      <header className="h-14 border-b-2 flex justify-between items-center px-6">
        <span className="font-medium">{user?.name ?? 'Unauthorized'}</span>
        <div className="flex gap-2">
          <div className="size-10">
            <img
              src={user?.picture}
              alt="user profile picture"
              className="size-full object-cover rounded-full"
            />
          </div>
          <IoMdLogOut
            className="my-auto size-10 cursor-pointer fill-[#110E3B] hover:fill-[#3B3B3B]"
            onClick={() => {
              localStorage.removeItem(ACCESS_TOKEN)
              setUser(undefined)
            }}
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
