import React from "react";
import reviews1 from '../../images/reviews1.png';
import reviews2 from '../../images/reviews2.png';
function Reviews(props) {

  return (
    <div className="ReviewsSection">
      <button className="normalBtn" id="tryBtn">TRY IT NOT</button>
      <div className="reviewsImage">
        <img src={reviews1} alt="reviews1"/>
        <img src={reviews2} alt="reviews2"/>
      </div>
      <div className="reviewsWrapper">
        <h1 className="heading" id="heading">REVIEWS</h1>
        <div className="reviewsContext">
          <div className="card">
            <span id="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
            <h4 id="category">ARTIST</h4>
            <p id="review">“Love it, it’s the Best.I can’t live without it!”</p>
          </div>
          <div className="card">
            <span id="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
            <h4 id="category">PRODUCER</h4>
            <p id="review">“Love it, it’s the Best.I can’t live without it!”</p>
          </div>
          <div className="card">
            <span id="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
            <h4 id="category">MUSIC FAN</h4>
            <p id="review">“Love it, it’s the Best.I can’t live without it!”</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
