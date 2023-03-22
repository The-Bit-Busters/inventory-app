import React from "react";
import {
  FaHome,
  FaPhone,
  FaMailBulk,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";
import "../stylesheets/footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <div className="home">
              <p>
                {" "}
                <FaHome size={20} style={{ marginRight: "2rem" }} /> New York,
                New York
              </p>
            </div>
          </div>
          <div className="phone">
            <p>
              <FaPhone size={20} style={{ marginRight: "2rem" }} />
              420-696-8008
            </p>
          </div>
          <div className="email">
            <p>
              <FaMailBulk size={20} style={{ marginRight: "2rem" }} />
              BitBucketW@gmail.com{" "}
            </p>
          </div>
        </div>
        <div className="right">
          <h4 className="about">Lorem Ipsum</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, ut
            sed? Aperiam nisi repudiandae quas aspernatur minus labore quia quae
            facilis, doloribus, recusandae, at velit similique explicabo amet
            nostrum veritatis!
          </p>
          <div className="social">
            <a href="https://www.linkedin.com/" target="_blank">
              <FaLinkedin size={20} style={{ marginRight: "1rem" }} />
            </a>
            <a href="https://www.instagram.com/" target="_blank">
              <FaInstagram size={20} style={{ marginRight: "1rem" }} />
            </a>
            <a href="https://www.facebook.com/" target="_blank">
              <FaFacebook size={20} style={{ marginRight: "1rem" }} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
