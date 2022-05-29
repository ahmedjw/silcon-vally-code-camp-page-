import { createContext, useState } from "react";

export const mainContext = createContext();
export function Layout({ themeColour, children }) {
  const [theme, setTheme] = useState(themeColour);
  const [showSessions, setShowSessions] = useState(true);
  return (
    <div>
      {" "}
      <mainContext.Provider
        value={{ theme, setTheme, showSessions, setShowSessions }}
      >
        <div
          className={
            theme === "light"
              ? "container-fluid light "
              : "container-fluid dark "
          }
        >
          {children}
        </div>
      </mainContext.Provider>
    </div>
  );
}
