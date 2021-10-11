/**
 * (On hold, not satisifed by current use case for sharing between index & talent pages)
 * can be used for sharing data to deeper tree nodes: drawer & card component
 * TODO: look into redux
 */

import { useContext, createContext, useState } from 'react'
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


