import React from "react";
import { AiOutlineCaretRight } from "react-icons/ai";

const About = () => {
  return (
    <div className="about">
      <div className="about-titel">
        <h1>Our Solutions</h1>
        <div className="underline"></div>
      </div>
      <div className="solution-items">
        <div className="solution-first">
          <div className="solution-works"></div>
          <h2>Infrastructure</h2>
          <p>
            Build on our complete open source blockchains protocol layer for
            business.
          </p>
          <div className="learn-more">
            <button>
              Learn More <AiOutlineCaretRight className="learn-icon" />
            </button>
          </div>
        </div>
        <div className="solution-second">
          <div className="solution-works"></div>
          <h2>Applications</h2>
          <p>
            end blockchain operation system.Optimize business process and create
            digital assests on our end-to-end blockchain operation system
          </p>
          <div className="learn-more">
            <button>
              Learn More <AiOutlineCaretRight className="learn-icon" />
            </button>
          </div>
        </div>
        <div className="solution-third">
          <div className="solution-works"></div>
          <h2>Security</h2>
          <p>
            Increase smart contract security and avoid costly errors with our
            industery-leading security service.
          </p>
          <div className="learn-more">
            <button>
              Learn More <AiOutlineCaretRight className="learn-icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
