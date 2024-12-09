import React from 'react';
import './footer.css';

const Footer = () => {
  return (
      
    <div className=" custom-class-back ">
        <footer className="footer flex justify-between text-base-content p-10">
          <nav>
            <h6 className="footer-title text-thirdary ">SERVICES</h6>
            <a className="link link-hover ">Emergency Checkup</a>
            <a className="link link-hover">Monthy Checkup</a>
            <a className="link link-hover">Weekly Checkup</a>
            <a className="link link-hover">Deep Chekup</a>
          </nav>
          <nav>
            <h6 className="footer-title">ORAL HEALTH</h6>
            <a className="link link-hover">Florida Treatment</a>
            <a className="link link-hover">cavit Filling</a>
            <a className="link link-hover">Teacth Whitening</a>
          </nav>
          <nav>
            <h6 className="footer-title">OUR ADDRESS</h6>
            <a className="link link-hover">New York -101010 Hudson</a>
          </nav>
        </footer>
        <footer className="footer  text-base-content  flex justify-center py-4">
            <p className='text-center'>Copyright 2022 All Rights Reserved</p>
        
          
        </footer>
      </div>
    );
};

export default Footer;