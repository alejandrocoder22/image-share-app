import { apiUrl } from './apiUrl'

export const onLogin: any = (form: any, userContext: any, navigate: any, e: any) => {
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
