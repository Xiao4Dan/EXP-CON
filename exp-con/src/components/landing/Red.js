import React from "react";
import red1 from "../../images/red1.png";
import red2 from "../../images/red2.png";
function Red(props) {

  return (
    <div className="RedSection">
      <button id="tryBtn" className="normalBtn">TRY IT NOW</button>
      <div className="redHeading">
        <h1 id="heading" className="heading">SUPERIOR SOUND</h1>
        <h2 id="subHeading" className="subHeading">Experience live versions of your favourite songs.</h2>
        <button id="demoBtn" className="normalBtn">SEE DEMO</button>
      </div>
      <div className="redImage">
        <img src={red1} alt="red1" id="red1"/>
        <img src={red2} alt="red2" id="red2"/> 
      </div>
    </div>
  );
}

export default Red;
