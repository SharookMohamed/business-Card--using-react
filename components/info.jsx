import { useState } from "react";
import mainImage from "../assets/info-img1.jpg";
import linkedinImage from "../assets/linkedin.png";
import emailImage from "../assets/Mail.png";

// Header.js
function Info() {
  return (
    <div className="info-container">
      <img className="main-image" src={mainImage} alt="" />
      <div>
        <div className="info-name">Sharook Mohamed</div>
        <div className="info-job">Software Developer</div>
      </div>
      <a
        href="https://sharook-portfolio2222.netlify.app/"
        className="info-website" target="_blank"
      >
        sharook.portfolio
      </a>
      <div className="bttn-flex-info">
        <button className="Linkedin--bttn">
          <img src={linkedinImage} alt="" />
          <h4 className="bttn-txt">Linkedin</h4>
        </button>
        <button className="email-bttn">
          <img src={emailImage} alt="" />
          <h4 className="bttn-txt">Email</h4>
        </button>
      </div>
    </div>
  );
}

export default Info;
