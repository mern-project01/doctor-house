import React from "react";
import chair from "../../../assets/img/chair 1.png";
import ButtonComponent from "../../../components/ButtonComponent/ButtonComponent";
import landing from "../../../assets/img/landing-bg.png";

const HomeBanner = () => {
  return (
    <div
      style={{
        background: `url(${landing})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="hero-content flex-col lg:flex-row-reverse py-32">
        <img src={chair} />
        <div>
          <h1 className="text-2xl my-2 lg:text-5xl font-bold">
            {" "}
            Your New Smile Starts Here
          </h1>
          <p className="py-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the
          </p>
          <ButtonComponent>GET STARTED</ButtonComponent>
        </div>
      </div>
      
    </div>
  );
};

export default HomeBanner;
