import React, { useState } from "react";
import AppointmentBanner from "./AppointmentBanner/AppointmentBanner";
import AvailableOptions from "./AvailableOptions/AvailableOptions";
import AvailableService from "./AvailableAppointmentServices/AvailableService";

const Appointment = () => {
      const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div>
          <AppointmentBanner selectedDate={selectedDate} setSelectedDate={setSelectedDate} ></AppointmentBanner>{" "}
          <AvailableService selectedDate={selectedDate} ></AvailableService>
          <AvailableOptions></AvailableOptions>
    </div>
  );
};

export default Appointment;
