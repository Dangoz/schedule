/**
 * Light/Dark Theme: context for css style variables.
 */

import { useContext, createContext } from 'react'
import ITheme from './theme.interface'
import { darkTheme } from './themes'
export const themeContext = createContext(null);

export const ThemeWrapper = ({ children }) => {
  const themes: { dark: ITheme } = {
    dark: darkTheme,
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


