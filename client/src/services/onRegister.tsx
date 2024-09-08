import { userContextType } from '../context/AuthContextProvider'
import { apiUrl } from './apiUrl'
import { onLogin } from './onLogin'

const delay = async (time: number): Promise<void> => await new Promise(resolve => setTimeout(resolve, time))

interface Form {
  username: string
  password: string
}

export const onRegister = async (form: Form, userContext: userContextType, navigate: (url: string) => void, e: React.FormEvent<HTMLFormElement>): Promise<void> => {
  e.preventDefault()

  await fetch(apiUrl + 'auth', {
    method: 'POST',
    headers: {
      'Content-Type': 'Application/json'

    },
    body: JSON.stringify(form)
  })

  await delay(1500)

  const login: any = onLogin(form, userContext, navigate, e)

  if (login.status === 'SUCESS') {
    localStorage.setItem('token', login.token)
  }
}
