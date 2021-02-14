import React from "react";
import yellow from '../../images/yellow.png';
function Yellow(props) {

  return (
    <div className="YellowSection">
      <button id="tryBtn" className="normalBtn">TRY IT NOW</button>
      <div className="redHeading">
        <h1 id="heading" className="heading">FRONT ROW SEATS</h1>
        <h2 id="subHeading" className="subHeading">Experience concerts up close and personal.</h2>
        <button id="demoBtn" className="normalBtn">SEE DEMO</button>
      </div>
    </div>
  );
}

export default Yellow;
