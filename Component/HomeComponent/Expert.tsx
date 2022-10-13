import React from "react";
import CountUp from "react-countup";
import Plus from "./Image/+.png";
import Image from "next/image";

function Expert() {
  return (
    <div className="expert-section">
      <div
        className="under-expert-section"
        style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr" }}
      >
        <div className="under-expert-section-left">
          <p>Smart Working Team</p>
          <h1>Some of the best of industry experts</h1>
        </div>
        <div className="under-expert-section-right">
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudanti um totam rem aperiam, eaque ipsa
            quae ab illo inve ntore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.{" "}
          </p>
        </div>
      </div>
      <div className="countup">
        <div className="countup1">
          <h1>
            {" "}
            <CountUp end={20} />
            <Image
              src={Plus}
              alt="+"
              width={67}
              height={70}
              className="plus"
              style={{ marginTop: "-5px" }}
            />
          </h1>
          <p>
            <b>Location</b> worldwide
          </p>
        </div>
        <div className="countup2">
          <h1>
            {" "}
            <CountUp end={23} />
            <Image
              src={Plus}
              alt="+"
              width={67}
              height={70}
              className="plus"
              style={{ marginTop: "-5px" }}
            />
          </h1>
          <p>
            Year of <b>Experience</b>
          </p>
        </div>
        <div className="countup3">
          <h1>
            {" "}
            <CountUp end={50} />
            <Image
              src={Plus}
              alt="+"
              width={67}
              height={70}
              className="plus"
              style={{ marginTop: "-5px" }}
            />
          </h1>
          <p>
            Global Happy <b>Clients</b>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Expert;
