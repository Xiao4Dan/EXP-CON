import React from "react";
function Perks(props) {

  return (
    <div className="PerksSection">
      <button className="gradientBtn" id="tryBtn">TRY IT NOW</button>
      <div className="perksWrapper">
        <h1 className="heading" id="heading">PERKS</h1>
        <div className="perksContext">
          <div className="card">
            <h4>Subscription Payment Model</h4>
            <p>No commitment, cancel anytime. Never worry about forgetting a payment again!</p>
          </div>
          <div className="card">
            <h4>No Fee Cancelation Policy</h4>
            <p>No commitment, cancel anytime. Never worry about forgetting a payment again!</p>
          </div>
          <div className="card">
            <h4>Subscription Payment Model</h4>
            <p>No commitment, cancel anytime. Never worry about forgetting a payment again!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Perks;
