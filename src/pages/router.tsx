import { Navigate, createBrowserRouter } from 'react-router-dom'
import MainLayout from '../common/components/layouts/main-layout'
import { ROUTER } from '../common/const/router-keys.const'
import SignInPage from './auth/sign-in-page'
import PrivateRoute from './hocs/private-route'
import PublicRoute from './hocs/public-route'
import MainPage from './main-page'

export const router = createBrowserRouter([
  {
    element: <PublicRoute />,
    children: [
      {
        index: true,
        element: <Navigate to={`/${ROUTER.DASHBOARD.INDEX}`} />,
      },
      {
        path: ROUTER.AUTH.INDEX,
        children: [
          {
            path: ROUTER.AUTH.SIGN_IN,
            element: <SignInPage />,
          },
        ],
      },
    ],
  },
  {
    element: <PrivateRoute />,
    children: [
      {
        path: ROUTER.DASHBOARD.INDEX,
        element: <MainLayout />,
        children: [
          {
            index: true,
            element: <MainPage />,
          },
        ],
      },
    ],
  },
])
