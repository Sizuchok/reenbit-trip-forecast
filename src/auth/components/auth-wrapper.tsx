import { ReactNode, useContext, useEffect } from 'react'
import LoadingSpinner from '../../common/components/loading-spinner'
import { ACCESS_TOKEN } from '../../common/const/local-storage-keys.const'
import { useUserProfile } from '../hooks/user-profile.hook'
import { User } from '../types/auth.types'
import { AuthContext } from './auth-context'

type Props = {
  children: ReactNode
}

const AuthWrapper = ({ children }: Props) => {
  const { data, isError, isFetching, isSuccess } = useUserProfile()
  const { setUser } = useContext(AuthContext)

  useEffect(() => {
    if (isSuccess) {
      const { name, given_name, family_name, email, picture, sub } = data

      const user: User = {
        id: sub,
        email,
        name,
        given_name,
        family_name,
        picture,
      }

      setUser(user)
    }

    if (isError) {
      localStorage.removeItem(ACCESS_TOKEN)
    }
  }, [data, isError, isSuccess, setUser])

  if (isFetching) {
    return (
      <div className="h-screen w-screen flex">
        <LoadingSpinner className="m-auto size-14" />
      </div>
    )
  }

  return children
}
export default AuthWrapper
