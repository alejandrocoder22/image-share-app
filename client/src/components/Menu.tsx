import { Link, useNavigate } from 'react-router-dom'
import ToggleThemeMode from './ToggleThemeMode'
import { useContext } from 'react'
import { UserContext } from '../context/AuthContextProvider'

interface Props {
  id: string | undefined
  setThemeMode: (value: (prev: string) => string) => void
}

interface UserContextType {
  user: {
    isLogged: boolean
  }
  setUser: (user: { isLogged: boolean }) => void
}

const Menu = (props: Props): JSX.Element => {
  const onTogleThemeMode: any = () => {
    props.setThemeMode((prev: string) => prev === 'light' ? 'dark' : 'light')
  }
  const userContext = useContext<UserContextType>(UserContext)

  const navigate = useNavigate()
  const onLogout = (): void => {
    localStorage.removeItem('token')
    navigate('/login')
    userContext.setUser({
      isLogged: false
    })
  }

  return (
    <header id={props.id}>
      <nav className='nav wrapper'>
        <Link to='/' className='nav__logo'>LOGO</Link>
        <div className='nav__right'>
          {userContext.user.isLogged && (
            <>
              <Link to='/dashboard' className='nav__link'>Dashboard</Link>
              <span className='nav__logout' onClick={onLogout}>Logout</span>
            </>
          )}
          <ToggleThemeMode onTogleThemeMode={onTogleThemeMode} />
        </div>
      </nav>
    </header>
  )
}

export default Menu
