import React from "react";

function Cardbody({ Data }) {
  const { id, first, last, bio } = Data;
  return (
    <div>
      <div className=" d-flex justify-content-center align-content-center ">
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
