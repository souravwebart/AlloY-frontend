import React from "react";
import Image from "next/image";
import CountUp from "react-countup";
import One from "./Image/Group.png";
import Two from "./Image/Group 345.png";
import Three from "./Image/Group (1).png";
import Four from "./Image/Group 3.png";

function FirstApproach() {
  return (
    <div className="firstapproach">
      {" "}
      <div className="expert-section">
        <div
          className="under-expert-section firstapproachunder"
          style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr" }}
        >
          <div className="under-expert-section-left">
            <p style={{ color: "#fff", paddingTop: "80px" }}>
              Customer Firsr Approach
            </p>
            <h1 className="approachhead" style={{ color: "#fff" }}>
              World Class Machine & Infra
            </h1>
            <h6 style={{ paddingTop: "19px", width: "90%" }}>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusa ntium doloremque laudanti um totam rem aperiam, eaque ipsa
            </h6>
            <div
              className="countupapproach"
              style={{
                display: "flex",
                paddingTop: "91px",
                justifyContent: "space-between",
              }}
            >
              <div className="countupapproach1">
                <Image
                  src={One}
                  alt="+"
                  width={71}
                  height={69}
                  className="approach"
                />
                <h1>
                  {" "}
                  <CountUp end={10000} />
                  <span style={{ paddingLeft: "8px" }}>
                    ft<sup>2</sup>{" "}
                  </span>
                </h1>
                <p style={{ paddingTop: "14px" }}>
                  <b>Factory</b> Area
                </p>
              </div>
              <div className="countupapproach2">
                <Image
                  src={Two}
                  alt="+"
                  width={71}
                  height={69}
                  className="approach"
                />
                <h1>
                  {" "}
                  <CountUp end={30} />
                  <span style={{ paddingLeft: "8px" }}>+</span>
                </h1>
                <p style={{ paddingTop: "14px" }}>
                  <b>Factory</b> We Have
                </p>
              </div>
              <div className="countupapproach3">
                <Image
                  src={Three}
                  alt="+"
                  width={71}
                  height={69}
                  className="approach"
                />
                <h1>
                  {" "}
                  <CountUp end={2000} />
                  <span style={{ paddingLeft: "8px" }}>+</span>
                </h1>
                <p style={{ paddingTop: "14px" }}>
                  <b>Workers</b> We Have
                </p>
              </div>
            </div>
          </div>
          <div
            className="under-firstapproach-section-right"
            style={{ verticalAlign: "middle", textAlign: "right" }}
          >
            <div className="firstapproachimg">
              <Image src={Four} alt="+" width={188} height={188} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstApproach;
