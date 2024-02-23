import { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { AuthContext } from '../../auth/components/auth-context'
import { ROUTER } from '../../common/const/router-keys.const'

const PublicRoute = () => {
  const { user } = useContext(AuthContext)

  return user ? <Navigate to={`/${ROUTER.DASHBOARD}`} replace /> : <Outlet />
}
export default PublicRoute
