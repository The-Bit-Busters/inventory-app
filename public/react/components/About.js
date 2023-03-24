import React from "react";
import "../stylesheets/about.css";
import aboutimg from "../stylesheets/aboutimg.png";

const About = () => {
  return (
    <div className="wrapper">
      <div className="mission-statement">
        <img
          className="mission-img"
          src={aboutimg}
          alt="company mission"
        />
      </div>
      <div className="core-values">
        <p className="core-p">
          At Bit Buckets, we believe in high quality and exceptional customer
          service. But more importantly, we believe shopping is a right, not a
          luxury, so we strive to deliver the best products at the most
          affordable prices, and ship them to you regardless of where you are
          located.
        </p>
      </div>
      <div className="history">
        <p className="history-values">
          We founded Bit Buckets 2 years ago in the tristate area, with the goal
          of providing great products to our customers. We believe everyone
          should be able to dress how they want, what they want, so we aim to
          provide products that give everyone the confidence to be who they are.
        </p>
      </div>
    </div>
  );
};

export default About;
