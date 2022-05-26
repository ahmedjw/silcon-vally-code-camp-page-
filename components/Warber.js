import { React, useState } from "react";
import { data } from "../SpeakerData";
import CardList from "../components/CardList";
import NavBar from "../components/navBar";
import SpeakersToolbar from "../components/SpeakersToolBar";

export default function Warber() {
  const [theme, setTheme] = useState("light");
  const [showSessions, setShowSessions] = useState(true);
  return (
    <div
      className={
        theme === "light" ? "container-fluid light" : "container-fluid dark"
      }
    >
      <NavBar Theme={theme} />
      <SpeakersToolbar
        theme={theme}
        setTheme={setTheme}
        showSessions={showSessions}
        setShowSessions={setShowSessions}
      />
      <CardList data={data} showSessions={showSessions} />
    </div>
  );
}
