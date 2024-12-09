import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <div className=" custom-class-back ">
      <footer className="footer flex justify-between text-base-content p-10">
        <nav>
          <h6 className="footer-title text-third ">SERVICES</h6>
          <a className="link link-hover text-fourth">Emergency Checkup</a>
          <a className="link link-hover text-fourth">Monthy Checkup</a>
          <a className="link link-hover text-fourth">Weekly Checkup</a>
          <a className="link link-hover text-fourth">Deep Chekup</a>
        </nav>
        <nav>
          <h6 className="footer-title text-third ">ORAL HEALTH</h6>
          <a className="link link-hover text-fourth">Florida Treatment</a>
          <a className="link link-hover text-fourth">cavit Filling</a>
          <a className="link link-hover text-fourth">Teacth Whitening</a>
        </nav>
        <nav>
          <h6 className="footer-title text-third">OUR ADDRESS</h6>
          <a className="link link-hover text-fourth">New York -101010 Hudson</a>
        </nav>
      </footer>
      <footer className="footer  text-third  flex justify-center py-4">
        <p className="text-center">Copyright 2022 All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default Footer;