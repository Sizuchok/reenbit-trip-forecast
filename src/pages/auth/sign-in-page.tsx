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
      <div className="flex flex-col items-center max-w-96 m-auto border rounded-md p-4">
        <h1 className="text-center text-xl font-semibold">Welcome to Trip Forecast</h1>
        <p className="text-sm text-[#939393] mt-4">You can login using your google account</p>
        <div className="mt-8 mb-4">
          <GoogleLogin
            onSuccess={async ({ credential }) => {
              if (!credential) return

              const payload = window.atob(credential.split('.')[1])
              const { name, given_name, family_name, email, picture, sub }: IdToken =
                JSON.parse(payload)

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
    </div>
  )
}
export default SignInPage
