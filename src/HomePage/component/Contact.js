import React from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Contact = () => {
  return (
    <div className="contact">
      <div className="partener">
        <div className="partener-btn">
            <FiChevronLeft className="btn-left" /> 
            <FiChevronRight className="btn-right"/>
        </div>
        <h1>Our Parteners</h1>
        <p>We are proud to be working landing institution</p>
      </div>
      <div className="contact-info">
        <div className="partener-one">
          <div className="part">
            <h1>AR</h1>
            <div></div>
          </div>
          <p>Tech Uk</p>
        </div>
        <div className="partener-two">
          <div className="part">
            <FiChevronRight />
          </div>
          <p>IFGS</p>
        </div>
        <div className="partener-three">
          <div className="part fade">
            <FiChevronRight />
            <h2>ORINA</h2>
          </div>
          <p>FWW Inc.</p>
        </div>
        <div className="partener-four">
          <div className="part">
            <FiChevronLeft />
          </div>
          <p>GovChain</p>
        </div>
        <div className="partener-five">
          <div className="part">
            <FiChevronLeft />
          </div>
          <p>Digital Isle Of Man</p>
        </div>
      </div>
      <footer>
        <div className="footer-logo">
          <div></div>
          <h2>ISFO</h2>
        </div>
        <div className="footer-solution">
          <div className="foot-line"></div>
          <div>
            <p>LINKS:</p>
            <h5>Solutions</h5>
            <h5>Tools</h5>
          </div>
        </div>
        <div className="foot-about">
          <p>About</p>
          <p>Insights</p>
        </div>
        <div className="footer-email">
          <p>SUBSCRIBE TO OUR NEWSLETTER:</p>
          <label>
            <input placeholder=" email" />
            <button>
              <FiChevronRight />
            </button>
          </label>
        <div className="copyright">
            Copyright © 2022 All Rights Reserved
        </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
