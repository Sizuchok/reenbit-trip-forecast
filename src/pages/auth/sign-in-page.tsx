import { GoogleLogin } from '@react-oauth/google'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../auth/components/auth-context'
import { IdToken, User } from '../../auth/types/auth.types'
import { ROUTER } from '../../common/const/router-keys.const'

const SignInPage = () => {
  const { setUser } = useContext(AuthContext)
  const navigate = useNavigate()

  return (
    <div className="w-screen h-screen flex">
      <div className="max-w-96 m-auto">
        <GoogleLogin
          onSuccess={async ({ credential }) => {
            if (!credential) return

            const some = window.atob(credential.split('.')[1])
            const { name, given_name, family_name, email, picture, sub }: IdToken = JSON.parse(some)

            const user: User = {
              id: sub,
              email,
              name,
              given_name,
              family_name,
              picture,
            }

            setUser(user)

            navigate(`/${ROUTER.DASHBOARD.INDEX}`)
          }}
        />
      </div>
    </div>
  )
}
export default SignInPage
