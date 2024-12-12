import React from 'react';
import people from '../../../assets/img/people-1 1.png'
import mask from '../../../assets/img/Mask Group 7@2x 1.png'
const Hometestimonal = () => {
    return (
      <div className="px-28 py-28">
        {/* this is for testimonal banner */}
        <div className="pb-24 md:flex flex-row-reverse justify-between">
          <img src={mask} alt="" />
          <div>
            <h4 className="pb-6 text-secondary text-xl font-extralight">
              Testimonial
            </h4>
            <h1 className="text-accent text-4xl">What Our Patients Says</h1>
          </div>
        </div>
        {/* this is for testimonal card section */}
        <div className=" px-12 md:grid grid-cols-3 gap-16">
          <div>
            <p className="text-accent ">
              It is a long established fact that by the readable content of a
              lot layout. The point of using Lorem a more-or-less normal
              distribu to using Content here, content
            </p>
            <div className="card card-side bg-base-100  text-white my-3">
              <figure>
                <img
                  className="outline outline-secondary rounded-full "
                  src={people}
                  alt="Movie"
                />
              </figure>
              <div className="card-body text-accent">
                <h2 className="card-title">Winson Herry</h2>
                <p>Winson Herry</p>
              </div>
            </div>
          </div>
          <div>
            <p className="text-accent ">
              It is a long established fact that by the readable content of a
              lot layout. The point of using Lorem a more-or-less normal
              distribu to using Content here, content
            </p>
            <div className="card card-side bg-base-100  text-white my-3">
              <figure>
                <img
                  className="outline outline-secondary rounded-full "
                  src={people}
                  alt="Movie"
                />
              </figure>
              <div className="card-body text-accent">
                <h2 className="card-title">Contact us now</h2>
                <p>+000 123 456789</p>
              </div>
            </div>
          </div>
          <div>
            <p className="text-accent ">
              It is a long established fact that by the readable content of a
              lot layout. The point of using Lorem a more-or-less normal
              distribu to using Content here, content
            </p>
            <div className="card card-side bg-base-100  text-white my-3">
              <figure>
                <img
                  className="outline outline-secondary rounded-full "
                  src={people}
                  alt="Movie"
                />
              </figure>
              <div className="card-body text-accent">
                <h2 className="card-title">Contact us now</h2>
                <p>+000 123 456789</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Hometestimonal;