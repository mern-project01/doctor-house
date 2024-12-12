import React from 'react';
import clock from "../../../assets/icon/clock.png";
import location from '../../../assets/icon/Path 7199.png'
import phone from "../../../assets/icon/Path 7196.png";


const HomeBannerCard = () => {
    return (
      <div className="px-4 md:grid grid-cols-3 gap-4">
        <div className="card card-side  bg-base-100 shadow-xl bg-gradient-to-l from-primary to-secondary text-white my-3">
          <figure className="ml-4">
            <img src={clock} alt="Movie" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Opening Hours</h2>
            <p>Lorem Ipsum is simply dummy text of the pri</p>
          </div>
        </div>
        <div className="card card-side shadow-xl bg-accent my-3">
          <figure className="ml-4">
            <img src={location} alt="Movie" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Visit our location</h2>
            <p>Brooklyn, NY 10036, United States</p>
          </div>
        </div>
        <div className="card card-side bg-base-100 shadow-xl bg-gradient-to-l from-primary to-secondary text-white my-3">
          <figure>
            <img className="ml-4" src={phone} alt="Movie" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Contact us now</h2>
            <p>+000 123 456789</p>
          </div>
        </div>
      </div>
    );
};

export default HomeBannerCard;