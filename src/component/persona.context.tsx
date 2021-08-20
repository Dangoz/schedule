/**
 * (On hold, not satisifed by current use case for use between index & talent pages)
 * Currently used for data sharing deeper tree nodes from index page: drawer & card component
 * TODO: look into redux
 */

import { useContext, createContext, useState } from "react"
export const personaContext = createContext(null);

export const PersonaWrapper = ({ children }) => {
  const [personaData, setPersonaData] = useState(null);
  const value = { personaData, setPersonaData };

  return (
    <personaContext.Provider value={value}>
      {children}
    </personaContext.Provider>
  )
}

export const usePersonaContext = () => {
  return useContext(personaContext)
}


