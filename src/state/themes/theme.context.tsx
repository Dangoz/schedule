/**
 * Light/Dark Theme: context for css style variables.
 */

import { useContext, createContext } from 'react'
import ITheme from './theme.interface'
import { darkTheme, springTheme } from './themes'
export const themeContext = createContext(null);

export const ThemeWrapper = ({ children }) => {
  const themes: { dark: ITheme, spring: ITheme } = {
    dark: darkTheme, spring: springTheme
  };

  return (
    <themeContext.Provider value={themes.dark}>
      {children}
    </themeContext.Provider>
  )
}

export const useThemeContext = (): ITheme => {
  return useContext(themeContext)
}


