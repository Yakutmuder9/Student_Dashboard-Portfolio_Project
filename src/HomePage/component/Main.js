import React from "react";
import { AiOutlineCaretRight } from "react-icons/ai";

const Home = () => {
  return (
    <div className="home">
      <div className="hacking">
        <p>HACKING THE CELL</p>
        <h1>Transfrom your Business with Blockchain</h1>
        <div className="learn-more">
          <button>
            Learn More <AiOutlineCaretRight className="learn-icon" />
          </button>
          <div className="box"></div>
        </div>
      </div>
      <div className="circle-one"></div>
      <div className="circle-two"></div>


    </div>
  );
};

export default Home;
