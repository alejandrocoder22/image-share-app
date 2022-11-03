import { createContext, useState } from 'react'

export const ThemeContext: any = createContext(null)

const ThemeContextProvider: any = (props: any) => {
  const [themeMode, setThemeMode] = useState('dark')

  return (
    <ThemeContext.Provider value={{ themeMode, setThemeMode }}>{props.children}</ThemeContext.Provider>
  )
}

export default ThemeContextProvider
