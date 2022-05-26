import React from "react";

export default function Session({ Data }) {
  const { sessions } = Data;
  return (
    <div className="card-body ">
      <span className="card-text">{sessions[0].title}</span>
      <strong className="card-text">{sessions[0].room.name}</strong>
    </div>
  );
}
