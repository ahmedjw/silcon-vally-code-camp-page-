import React, { useContext } from "react";
import Cardbody from "./Cardbody";
import Session from "./Session";
import ReactPlaceholder from "react-placeholder";
import { SpeakerContext } from "../context/SpeakerProvider";
import { mainContext } from "../context/ThemeProvider";

export default function Card({ data, isLoading }) {
  const { sessions } = data;

  const { showSessions, eventYear } = useContext(SpeakerContext);
  const { theme } = useContext(mainContext);
  return (
    <ReactPlaceholder type="media" rows={6} ready={isLoading === false}>
      <div
        className={
          theme === "light" ? "card text-dark" : " dark text-light border-white"
        }
      >
        <Cardbody Data={data} />
        <div className="card-body ">
          {showSessions === true
            ? sessions
                .filter((session) => session.eventYear == eventYear)
                .map((session) => <Session session={session} />)
            : ""}
        </div>
      </div>
    </ReactPlaceholder>
  );
}
