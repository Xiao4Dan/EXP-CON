import React from "react";
function Footer(props) {

  return (
    <div className="FooterSection">
      <div className="footerContext">
        <div id="footerHeading">
          <h1 id="heading" className="heading">GET EXP|CON NOW</h1>
          <h2 id="subHeading" className="subHeading">Purchase and download the app</h2>
        </div>
        <button id="tryBtn" className="gradientBtn">TRY IT NOW</button>
      </div>
      <div className="footerContact">
        <span id="email">&#9993; support@experienceconcerts.co</span>
        <h4>EXP|CON</h4>
        <p>2019 © All Rights Reserved | Speer Technologies Incorporated</p>
      </div>
    </div>
  );
}

export default Footer;
