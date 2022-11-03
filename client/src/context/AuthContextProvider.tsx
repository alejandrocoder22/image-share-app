import { useState, createContext } from 'react'

export const UserContext: any = createContext(null)

const AuthContextProvider: any = (props: any) => {
  const [user, setUser] = useState({
    username: '',
    isLogged: false
  })

  return (
    <UserContext.Provider value={{ user, setUser }}>{props.children}</UserContext.Provider>
  )
}

export default AuthContextProvider
