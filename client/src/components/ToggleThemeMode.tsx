import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContextProvider'

const ToggleThemeMode = (props: { onTogleThemeMode: () => void }): JSX.Element => {
  const themeContext: { themeMode: string } = useContext(ThemeContext)

  return (
    <div onClick={props.onTogleThemeMode} className={`toggle ${themeContext.themeMode === 'light' ? 'toggle__light' : 'toggle__dark'}`}>
      <div className={`toggle__button ${themeContext.themeMode === 'light' ? 'toggle__left' : 'toggle__right'}`} />
    </div>
  )
}

export default ToggleThemeMode
