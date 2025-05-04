import React from "react";

export const Appointment = ({ customer }) => {
  return (
    <div>{customer.firstName}</div>
  )
};

export const AppointmentDayView = ({ appointments }) => {
  return (
    <div id="appointmentDayView">
      <ol>
        {appointments.map(appointment => (
          <li key={appointment.startsAt}>
            {appointmentTimeOfDay(appointment.startsAt)}
          </li>
        ))}
      </ol>
      {appointments.length === 0 ? (
        <p>There are no appointments scheduled for today</p>
      ) : (
        <Appointment {...appointments[0]} />
      )}
    </div>
  )
};

const appointmentTimeOfDay = (startsAt) => {
  const [h, m] = new Date(startsAt).toTimeString().split(":");
  return `${h}:${m}`;
}
