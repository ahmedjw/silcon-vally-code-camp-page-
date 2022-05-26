import React from "react";
import Cardbody from "./Cardbody";
import Session from "./Session";

export default function Card({ data, showSessions }) {
  return (
    <div className="card ">
      <Cardbody Data={data} />
      {showSessions === true ? <Session Data={data} /> : ""}
    </div>
  );
}
