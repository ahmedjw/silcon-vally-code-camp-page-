import { useContext } from "react";
import SpeakerProvider from "../context/SpeakerProvider";
import { mainContext, ThemeProvider } from "../context/ThemeProvider";

export default function Layout({ themeColour, children }) {
  return (
    <ThemeProvider themeColour={themeColour}>
      <LayoutNoProvider>{children}</LayoutNoProvider>
    </ThemeProvider>
  );
}
function LayoutNoProvider({ children }) {
  const { theme } = useContext(mainContext);
  return (
    <div
      className={
        theme === "light" ? "container-fluid light " : "container-fluid dark "
      }
    >
      {children}
    </div>
  );
}
