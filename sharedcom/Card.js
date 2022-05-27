import React from "react";
import Cardbody from "./Cardbody";
import Session from "./Session";

export default function Card({ data, showSessions, theme }) {
  return (
    <div className={theme === "light" ? "card" : "text-light"}>
      <Cardbody Data={data} />
      {showSessions === true ? <Session Data={data} /> : ""}
    </div>
  );
}
