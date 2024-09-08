import { userContextType } from '../context/AuthContextProvider'
import { apiUrl } from './apiUrl'

interface formTypes {
  username: string
  password: string
}

export const onLogin = (form: formTypes, userContext: userContextType, navigate: (url: string) => void, e: React.FormEvent<HTMLFormElement>): void => {
  e.preventDefault()

  if (form.username.length > 0 && form.password.length > 0) {
    fetch(apiUrl + 'auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/json'

      },
      body: JSON.stringify(form)
    })
      .then(async response => await response.json())
      .then(loginData => {
        if (loginData.status === 'SUCESS') {
          localStorage.setItem('token', loginData.token)
          userContext.setUser({ isLogged: true })
          navigate('/dashboard')
        }
      }).catch(err => console.log(err))
  }
}
