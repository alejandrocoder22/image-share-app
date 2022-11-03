import { Link, useNavigate } from 'react-router-dom'
import AuthInput from '../components/AuthInput'
import { UserContext } from '../context/AuthContextProvider'
import useForm from '../hooks/useForm'
import { useContext } from 'react'
import { onLogin } from '../services/onLogin'

const Login: any = () => {
  const { handleForm, form } = useForm()

  const navigate = useNavigate()
  const userContext = useContext(UserContext)

  return (
    <div className='auth-container min-height'>
      <form onSubmit={(e) => onLogin(form, userContext, navigate, e)} className='auth-form'>
        <AuthInput handleChange={handleForm} labelText='Username' type='text' nameText='username' />
        <AuthInput handleChange={handleForm} labelText='Password' type='password' nameText='password' />
        <button className='auth__button'>Login</button>
        <p className='auth__p'>Not having an account?<Link className='auth__link' to='/register'>Register here</Link></p>
      </form>
    </div>
  )
}

export default Login
