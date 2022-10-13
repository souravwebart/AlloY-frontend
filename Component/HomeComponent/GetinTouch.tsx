import React from "react";
import Image from "next/image";
import MapIcon from "./Image/Group 277.png";
import MapImage from "./Image/image 15 (1).png";

function GetinTouch() {
  return (
    <div className="getintouch-section">
      <div
        className="insidegetintouch"
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}
      >
        <div className="mapgetintouch">
          <h1>Get in touch</h1>
          <div
            style={{ display: "flex", marginBottom: "42px", width: "93%" }}
            className="maplogo"
          >
            <p>
              <Image src={MapIcon} alt="+" width={26.18} height={32} />
            </p>
            <p>
              7, South Side G.T Rd, Sector 13, Bulandshahr Road Industrial Area,
              Ghaziabad, Uttar Pradesh
            </p>
          </div>
          <p
            style={{
              borderRadius: "10px",
              boxShadow: "0px 4px 54px rgba(0, 0, 0, 0.25)",
            }}
            className="mapimagep"
          >
            <Image
              src={MapImage}
              alt="+"
              width={587}
              height={422}
              className="mapimage"
            />
          </p>
        </div>
        <div className="formtouch" style={{ padding: "70px 46px" }}>
          <form>
            <div className="user-box">
              <input type="text" name="" required={true} />
              <label>Full Name</label>
            </div>
            <div className="user-box">
              <input type="email" name="" required={true} />
              <label>Email Address</label>
            </div>
            <div className="user-box">
              <input type="phone" name="" required={true} />
              <label>Mobile Number</label>
            </div>
            <div className="user-box" style={{ marginBottom: "37px" }}>
              <textarea name="" required={true} />
              <label>Type your message here...</label>
            </div>
            <a href="#">Submit</a>
          </form>
        </div>
      </div>
    </div>
  );
}

export default GetinTouch;
