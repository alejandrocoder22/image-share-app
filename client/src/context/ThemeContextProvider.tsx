import { createContext, useState } from 'react'

export enum ThemeOptions {
  dark = 'dark',
  light = 'light'
}

interface ThemeContextTypes {
  themeMode: string
  setThemeMode: (mode: ThemeOptions) => void
}

export const ThemeContext = createContext<ThemeContextTypes | null>(null)

const ThemeContextProvider = (props: { children: React.ReactNode }): JSX.Element => {
  const [themeMode, setThemeMode] = useState<ThemeOptions>(ThemeOptions.dark)

  return (
    <ThemeContext.Provider value={{ themeMode, setThemeMode }}>{props.children}</ThemeContext.Provider>
  )
}

export default ThemeContextProvider
