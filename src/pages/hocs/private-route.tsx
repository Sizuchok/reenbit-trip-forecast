import { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { AuthContext } from '../../auth/components/auth-context'
import { ROUTER } from '../../common/const/router-keys.const'

const PrivateRoute = () => {
  const { user } = useContext(AuthContext)

  return user ? <Outlet /> : <Navigate to={`/${ROUTER.AUTH.INDEX}/${ROUTER.AUTH.SIGN_IN}`} />
}
export default PrivateRoute
