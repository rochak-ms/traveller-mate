import React from "react";
import Login from "./Login";
import Signup from "./Signup";
import "./landing.css";

const Landing = () => {
  return (
    <>
      <div className="container">
        <div className={"parallax text-center1"}>
          <img
            draggable="false"
            id="mountain"
            src="https://www.design-fenix.com.ar/codepen/parallax/mountain.png"
            alt=""
          />

          <img
            draggable="false"
            id="island"
            src="https://www.design-fenix.com.ar/codepen/parallax/island.png"
            alt=""
          />
          <img
            draggable="false"
            id="boat"
            src="https://www.design-fenix.com.ar/codepen/parallax/boat.png"
            alt=""
          />
          <h1 className="text-center1 land-header">TRAVELLER MATE</h1>
          <div className="lowBtn">
            <Login /> <strong>- OR -</strong> <Signup />
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
