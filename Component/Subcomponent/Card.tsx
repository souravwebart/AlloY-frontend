import React from "react";

interface Props {
  data: any;
}

function Card(Props: Props) {
  const { data } = Props;
  return (
    <div
      className="slider-card"
      style={{
        background: `url(${data.image}), linear-gradient(180deg, rgba(0, 0, 0, 0) 70.05%, #000000 110.99%)`,
        textAlign: "left",
      }}
    >
      <div className="inside-card">
        <hr
          style={{
            height: "4px",
            backgroundColor: "#EC2232",
            borderRadius: "1px",
            border: "1px solid #EC2232",
            width: "116px",
            left: "0px",
            textAlign: "left",
            margin: "0px auto 20px 0px",
          }}
        />
        <h1>{data.heading}</h1>
        <p>{data.description}</p>
      </div>
    </div>
  );
}

export default Card;
