import { React, useState } from "react";
import { data } from "../SpeakerData";
import CardList from "./CardList";
import NavBar from "./navBar";
import SpeakersToolbar from "./SpeakersToolBar";

export default function App() {
  const [theme, setTheme] = useState("light");
  const [showSessions, setShowSessions] = useState(true);
  return (
    <div
      className={
        theme === "light" ? "container-fluid light" : "container-fluid dark"
      }
    >
      <div className="container">
        <NavBar Theme={theme} />
        <SpeakersToolbar
          theme={theme}
          setTheme={setTheme}
          showSessions={showSessions}
          setShowSessions={setShowSessions}
        />
        <CardList data={data} showSessions={showSessions} theme={theme} />
      </div>
    </div>
  );
}