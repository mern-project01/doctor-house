import React, { useState } from "react";
import landing from "../../../assets/img/landing-bg.png";
import chair from "../../../assets/img/chair 1.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";

const AppointmentBanner = ({selectedDate, setSelectedDate}) => {
  // const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div
      style={{
        background: `url(${landing})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="md:mx-10 lg:container "
    >
      <div className="hero-content  flex-col  lg:flex-row-reverse  py-32">
        <img src={chair} />
        <div className="p-2 mr-5 shadow-2xl bg-base-100 rounded-4xl ">
          <DayPicker
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
            footer={
              selectedDate
                ? `Selected: ${selectedDate.toLocaleDateString()}`
                : "Pick a day."
            }
            className="p-8"
          />
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
