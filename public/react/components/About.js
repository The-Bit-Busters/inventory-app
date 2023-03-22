import React from "react";
import "../stylesheets/about.css";

const About = () => {
  return (
    <div className="wrapper">
      <div className="box a">
        {" "}
        <span>Mission Statement</span>:We are committed to a standard of excellence in every aspect of our business.Our products are designed for the ever-changing world of street culture. It’s not just what you’re wearing, it’s where you’re going.
      </div>
      <div className="box b">
        <span>Core Values</span>:  We at [SHOP NAME] believe in high quality and exceptional customer service. But most importantly, we believe shopping is a right, not a luxury, so we strive to deliver the best products at the most affordable prices, and ship them to you regardless of where you are located.
      </div>
      <div className="box c">
        <span>Company History</span>: We founded [Our company name] about 2 years ago, with the goal of providing great products to our customers. Our company was founded right here in the tristate area. 
        {" "}
      </div>
      <div className="box d">
        <span>Target Market</span>: We believe everyone should be able to dress How they want, when they want, and we aim to provide products that give everyone the confidence to be who they are. Whether youre 18 or 81 we have the same gola of providing wuality products at prices you cna afford. 
      </div>

    </div>
  );
};

export default About;
