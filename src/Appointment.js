import React from "react";

export const Appointment = ({customer}) => {
  return (
    <div>{customer.firstName}</div>
  )
};

export const AppointmentDayView = () => {
  return (
    <div id="appointmentDayView"></div>
  )
};
