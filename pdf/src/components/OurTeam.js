
import React from "react";
import "./OurTeam.css";

import AnithaImage from "./Asset/Anitha.jpg";
import SmithImage from "./Asset/smith.jpg";
import VinayImage from "./Asset/vinay.jpg";
import StephenImage from "./Asset/Stephen.jpg";
import WilliamImages from "./Asset/Williaim.jpg";
import LogoImage from "./Asset/logo.png";

const OurTeam = () => {
  return (
    <div className="our-team-container">
      <header className="header">
        <img src={LogoImage} alt="Lovely Trails Logo" className="logo-img" />
        <nav>
          <ul>
            <li>About Us</li>
            <li>Book</li>
            <li>Tours</li>
            <li>Experience</li>
            <li>Discover</li>
            <li>Contact Us</li>
          </ul>
        </nav>
      </header>

      <section className="team-section">
        <h2>Our Team</h2>
        <div className="team-members">
          <div className="team-member">
            <div className="image-container">
              <img src={AnithaImage} alt="Anitha K" className="team-img" />
            </div>
            <div className="info-container">
              <h3>Anitha.K</h3>
              <p>Project Coordinator</p>
            </div>
          </div>
          <div className="team-member">
            <div className="image-container">
              <img src={SmithImage} alt="Smith" className="team-img" />
            </div>
            <div className="info-container">
              <h3>Smith</h3>
              <p>Project Lead</p>
            </div>
          </div>
          <div className="team-member">
            <div className="image-container">
              <img src={VinayImage} alt="Vinay" className="team-img" />
            </div>
            <div className="info-container">
              <h3>Vinay</h3>
              <p>Tour Guide</p>
            </div>
          </div>
          <div className="team-member">
            <div className="image-container">
              <img src={StephenImage} alt="Stephen" className="team-img" />
            </div>
            <div className="info-container">
              <h3>Stephen</h3>
              <p>Project Coordinator</p>
            </div>
          </div>
          <div className="team-member">
            <div className="image-container">
              <img src={WilliamImages} alt="Williaim" className="team-img" />
            </div>
            <div className="info-container">
              <h3>Williaim</h3>
              <p>Project Lead</p>
            </div>
          </div>
        </div>
      </section>
      <div class="footer-wrapper">
        <footer className="footer">
          <div className="help-section">
            <div className="box">
              <h4>Need Lovely Trails Help?</h4>
              <p>Got Questions? Call us now</p>
              <p>Call Us: +91 860-806-0000</p>
              <p>Mail Us: enjoy@lovelytrails.com</p>
            </div>

            <div className="contact-info">
              <h4>Contact Info</h4>
              <p>100, Subramaniya Mudali St. Saidapet, Chennai - 600015</p>
            </div>
          </div>

          <div className="quick-links">
            <h4>Quick Links</h4>
            <ul>
              <li>FAQ</li>
              <li>Payments</li>
              <li>Tourist Visa</li>
              <li>Travel Rewards</li>
              <li>Referral Program</li>
              <li>Responsible Travel</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>

          <div className="community">
            <h4>Be A Part Of Our Community</h4>
            <p>
              Get to know about our upcoming trips, travel ideas, and blog posts
              instantly!
            </p>
            <button>Join Our WhatsApp Group</button>
            <img
              src={LogoImage}
              alt="Lovely Trails Logo"
              className="footer-logo"
            />
          </div>
        </footer>
      </div>
      <div className="footer-bottom">
        <p>© 2015 - 2023 Lovely Trails. All rights reserved.</p>
        <div className="footer-links">
          <a href="#">Home</a>
          <a href="#">About Us</a>
          <a href="#">Team</a>
          <a href="#">Services</a>
          <a href="#">Careers</a>
          <a href="#">Privacy</a>
          <a href="#">Contact</a>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
