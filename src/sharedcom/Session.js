import React from "react";

export default function Session({ session }) {
  return (
    <div>
      <span className="card-text">{session.title}</span>
      {"\t"}
      <strong className="card-text">{session.room.name}</strong>
    </div>
  );
}
