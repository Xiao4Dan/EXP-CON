import React, { useState, useEffect } from "react";
import yellow from "../../images/yellow.png";
function Yellow(props) {
  return (
    <div className="YellowSection">
      <button id="tryBtn" className="normalBtn">
        TRY IT NOW
      </button>
      <div className="yellowMask">
        <div className="yellowHeading">
          <h1 id="heading" className="heading">
            FRONT ROW SEATS
          </h1>
          <h2 id="subHeading" className="subHeading">
            Experience concerts up close and personal.
          </h2>
          <button id="demoBtn" className="normalBtn">
            SEE DEMO
          </button>
        </div>
      </div>
      <img
        src={yellow}
        alt="yellow"
        id="yellowBackground1"
        className="yellowBackground"
      />
    </div>
  );
}

export default Yellow;
