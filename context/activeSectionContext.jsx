"use client"
import React, { useState, createContext, useContext } from 'react';

const ActiveSectionContext = createContext(null);

function ActiveSectionContextProvider({ children }) {
  const [activeSection, setActiveSection] = useState('Home');
  const [timeOfLastClick, setTimeOfLastClick] = useState(0); // seguimiento del tiempo del último clic para deshabilitar temporalmente el observador cuando el usuario hace clic en un enlace

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}

function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext);

  if (context === null) {
    throw new Error('useActiveSectionContext must be used within an ActiveSectionContextProvider');
  }

  return context;
}

export { ActiveSectionContextProvider, useActiveSectionContext, ActiveSectionContext };
