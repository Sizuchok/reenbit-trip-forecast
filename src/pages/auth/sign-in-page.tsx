import { useGoogleLogin } from '@react-oauth/google'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../auth/components/auth-context'
import { GoogleOAuthUserProfile, User } from '../../auth/types/auth.types'
import Button from '../../common/components/button'
import { API } from '../../common/const/api-endpoints.const'
import { ACCESS_TOKEN } from '../../common/const/local-storage-keys.const'
import { ROUTER } from '../../common/const/router-keys.const'
import { googleOauthClient } from '../../service/util/google-oath-client'

const SignInPage = () => {
  const { setUser } = useContext(AuthContext)
  const navigate = useNavigate()

  const singIn = useGoogleLogin({
    onSuccess: async ({ access_token }) => {
      localStorage.setItem(ACCESS_TOKEN, access_token)

      const response = await googleOauthClient.get<GoogleOAuthUserProfile>(
        API.GOOGLE_OAUTH.USERINFO,
        {
          headers: { Authorization: `Bearer ${access_token}` },
        },
      )

      const { name, given_name, family_name, email, picture, sub } = response.data

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
    },
  })

  return (
    <div className="w-screen h-screen flex">
      <div className="flex flex-col items-center max-w-96 m-auto border rounded-md p-4">
        <h1 className="text-center text-xl font-semibold">Welcome to Trip Forecast</h1>
        <p className="text-sm text-[#939393] mt-4">You can login using your google account</p>
        <div className="mt-8 mb-4">
          <Button type="button" onClick={() => singIn()}>
            Sign in with Google 🚀
          </Button>
        </div>
      </div>
    </div>
  )
}
export default SignInPage
