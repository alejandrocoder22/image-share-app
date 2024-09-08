import { useState, createContext } from 'react'

interface User {
  username?: string | null
  isLogged: boolean
  user?: string | null
}

interface userContextType {
  user: User
  setUser: (user: User) => void
}
export const UserContext = createContext<userContextType | null>(null)

interface Props {
  children: React.ReactNode
}

const AuthContextProvider = (props: Props): JSX.Element => {
  const [user, setUser] = useState<User>({
    username: '',
    isLogged: false
  })

  return (
    <UserContext.Provider value={{ user, setUser }}>{props.children}</UserContext.Provider>
  )
}

export default AuthContextProvider
