import React from "react";
import Image from "next/image";
import Twitter from "./HomeComponent/Image/Vector (2).png";
import Instra from "./HomeComponent/Image/Group 101.png";
import Linkedin from "./HomeComponent/Image/Group 97.png";
function Footer() {
  return (
    <div className="footer">
      <div className="inside-footer">
        <div className="footer-1">
          <p>About us</p>
          <p>Infastructure</p>
          <p>Contact us</p>
        </div>
        <div className="footer-2">
          <h2>Industry</h2>
          <div
            className="footerinsidebox"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <div>
              <ul>
                <li>Cement </li>
                <li>Mining Processing</li>
                <li>Rubber</li>
              </ul>
            </div>

            <div>
              <ul>
                <li>Sugar </li>
                <li>Fertilizer </li>
                <li>Power</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-4" style={{ textAlign: "right" }}>
          <div className="socialicon" style={{ display: "flex", gap: "30px" }}>
            <Image src={Twitter} alt="+" width={25.17} height={20} />
            <Image src={Instra} alt="+" width={20} height={20} />
            <Image src={Linkedin} alt="+" width={23.16} height={22} />
          </div>
          <p style={{ paddingTop: "43px" }}>2022 © Rp alloys & steel forging</p>
          <p style={{ paddingTop: "24px" }}>Design Credits : Art Attackk</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
