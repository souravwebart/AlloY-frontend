import React from "react";
import Image from "next/image";
import Humburger from "./Image/Group 298.png";
import Brand from "./Image/Group 138.png";
import Arrow from "./Image/Vector 7.png";

function Header() {
  return (
    <div style={{ backgroundColor: "#fff", height: "79px", padding: "28px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          maxHeight: "22px",
        }}
      >
        <div style={{}}>
          <Image src={Humburger} alt="Humburger" width={29.33} height={15} />
        </div>
        <div>
          <Image src={Brand} alt="Brand" width={138} height={22} />
        </div>
        <div>
          <h1 className="header-text">
            Get in Touch
            <span style={{ paddingLeft: "8px" }}>
              <Image src={Arrow} alt="Brand" width={12} height={8} />
            </span>
          </h1>
          <hr
            style={{
              color: "#000",
              fontSize: "12px",
              height: "2px",
              backgroundColor: "#000",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
