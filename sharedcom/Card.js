import React from "react";
import Cardbody from "./Cardbody";
import Session from "./Session";
import ReactPlaceholder from "react-placeholder";

export default function Card({ data, showSessions, theme, isLoading }) {
  return (
    <ReactPlaceholder type="media" rows={6} ready={isLoading === false}>
      <div className={theme === "light" ? "card" : "text-light border-light"}>
        <Cardbody Data={data} />
        {showSessions === true ? <Session Data={data} /> : ""}
      </div>
    </ReactPlaceholder>
  );
}
