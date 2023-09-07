// DarkModeProvider.tsx
import React, { createContext, useContext, useState } from 'react';

// Create a context for dark mode
const DarkModeContext = createContext<{
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
} | undefined>(undefined);

export function useDarkMode() {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw new Error('useDarkMode must be used within a DarkModeProvider');
  }
  return context;
}

export function DarkModeProvider({ children }: { children: React.ReactNode }) {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}
