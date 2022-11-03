import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthInput from '../components/AuthInput'
import { UserContext } from '../context/AuthContextProvider'
import useForm from '../hooks/useForm'
import { onRegister } from '../services/onRegister'

const Register: any = () => {
  const navigate = useNavigate()
  const userContext = useContext(UserContext)
  const { handleForm, form } = useForm()
  return (
    <div className='auth-container min-height'>
      <form onSubmit={(e) => onRegister(form, userContext, navigate, e)} className='auth-form'>
        <AuthInput handleChange={handleForm} labelText='Username' type='text' nameText='username' />
        <AuthInput handleChange={handleForm} labelText='Password' type='password' nameText='password' />
        <button className='auth__button'>Register</button>
      </form>
    </div>
  )
}

export default Register
