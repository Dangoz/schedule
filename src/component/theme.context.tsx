/**
 * Light/Dark Theme: context for css style variables.
 */

import { useContext, createContext } from "react"
export const themeContext = createContext(null);

export const PersonaWrapper = ({ children }) => {
  const value = {};

  return (
    <themeContext.Provider value={value}>
      {children}
    </themeContext.Provider>
  )
}

export const useThemeContext = () => {
  return useContext(themeContext)
}


