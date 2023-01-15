import { apiUrl } from './apiUrl'
import { onLogin } from './onLogin'

const delay: any = async (time: number) => await new Promise(resolve => setTimeout(resolve, time))

export const onRegister: any = async (form: any, userContext: any, navigate: any, e: any) => {
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
