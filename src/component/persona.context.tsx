/**
 * (On hold, not satisifed by current use case.
 * can't share data across pages, by using getStaticProps)
 * TODO: maybe redux can work?..
 */

import { useContext, createContext, useState } from "react"
export const personaContext = createContext(null);

export const PersonaWrapper = ({ children }) => {
  const [personaData, setPersonaData] = useState({ apple: 'sour' });
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


