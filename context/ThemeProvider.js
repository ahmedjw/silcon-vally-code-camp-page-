import { createContext, useState } from "react";

export const mainContext = createContext();

function ThemeProvider({ themeColour, children }) {
  const [theme, setTheme] = useState(themeColour);
  const [showSessions, setShowSessions] = useState(true);
  return (
    <mainContext.Provider
      value={{ theme, setTheme, showSessions, setShowSessions }}
    >
      {children}
    </mainContext.Provider>
  );
}
export { ThemeProvider };
