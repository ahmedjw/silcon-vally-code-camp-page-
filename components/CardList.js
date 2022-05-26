import React from "react";
import Card from "../sharedcom/Card";

export default function CardList({ data, showSessions }) {
  return (
    <div className="container-fluied">
      <div className="row row-cols-1 row-cols-sm-3 ">
        {data.map((speaker) => (
          <Card Key={speaker.id} data={speaker} showSessions={showSessions} />
        ))}
      </div>
    </div>
  );
}
