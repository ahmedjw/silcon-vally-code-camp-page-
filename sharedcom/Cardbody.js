import React from "react";

function Cardbody({ Data }) {
  const { id, first, last, bio, company, twitterHandle } = Data;
  return (
    <div>
      <div className=" d-flex justify-content-center align-content-center contain-fit ">
        <img src={`/images/speaker-${id}.jpg`} alt="Picture of the Speaker" />
      </div>
      <div className="card-body d-flex justify-content-center align-content-center flex-column">
        <h5 className="card-title">{first + "\t" + last}</h5>
        <p className="card-text">{bio}</p>
      </div>
    </div>
  );
}

export default Cardbody;
