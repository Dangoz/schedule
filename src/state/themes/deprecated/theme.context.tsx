/**
 * Light/Dark Theme: context for css style variables.
 */

import { useContext, createContext } from 'react'
import ITheme from '../theme.interface'
import themes from '../themes'
export const themeContext = createContext(null);

export const ThemeWrapper = ({ children }) => {

  return (
    <themeContext.Provider value={themes[0]}>
      {children}
    </themeContext.Provider>
  )
}

export const useThemeContext = (): ITheme => {
  return useContext(themeContext)
}


