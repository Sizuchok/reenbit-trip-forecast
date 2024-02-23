import { Dispatch, ReactNode, SetStateAction, createContext, useState } from 'react'
import { User } from '../types/auth.types'

type AuthContext = {
  user: User | undefined
  setUser: Dispatch<SetStateAction<User | undefined>>
}

export const AuthContext = createContext<AuthContext>({} as AuthContext)

type Props = {
  children: ReactNode
}

const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState<User | undefined>()

  return <AuthContext.Provider value={{ user, setUser }}>{children}</AuthContext.Provider>
}

export default AuthProvider
