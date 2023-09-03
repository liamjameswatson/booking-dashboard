import { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorageState";

const DarkModeContext = createContext();

function toggleDarkMode() {
  setIsDarkMode((isDark) => !isDark);
}

function DarkModeprovider({ children }) {
  const [isDarkMode, setIsDarkMode] = useLocalStorage(false, "isDarkMode");

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}


