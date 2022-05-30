import { createContext, useState } from "react";

export const mainContext = createContext();

export function ThemeProvider({ themeColour, children }) {
  const [theme, setTheme] = useState(themeColour);
  return (
    <mainContext.Provider value={{ theme, setTheme }}>
      {children}
    </mainContext.Provider>
  );
}
