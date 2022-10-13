import React from "react";
import Background from "./Image/Group 297.png";

function HeroSection() {
  return (
    <div
      className="home-hero-section"
      style={{
        backgroundRepeat: "no-repeat",
        padding: "0px",
        margin: "0rem 4.938rem",
      }}
    >
      <div
        className="under-hero-section"
        style={{ paddingTop: "107px", paddingLeft: "111px", height: "866px" }}
      >
        <h1 className="herosection-heading">
          Best Machine and Casting Solution
        </h1>
      </div>
    </div>
  );
}

export default HeroSection;
