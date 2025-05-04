import React, { act } from "react";
import ReactDOM from "react-dom/client";
import { Appointment, AppointmentDayView } from "./Appointment"

describe("Appointment", () => {
  let container;

  beforeEach(() => {
    container = document.createElement("div");
    document.body.replaceChildren(container);
  });

  const render = component => act(() => {
    ReactDOM.createRoot(container).render(component);
  });

  it("renders the customer first name", () => {
    const customer = { firstName: "Ashley" };

    render(<Appointment customer={customer} />);

    expect(document.body.textContent).toContain("Ashley")
  })

  it("renders another customer first name", () => {
    const customer = { firstName: "Jordan" };

    render(<Appointment customer={customer} />)

    expect(document.body.textContent).toContain("Jordan")
  })
});

describe("AppointmentDayView", () => {
  let container;
  const today = new Date();
  const twoAppointments = [
    { startsAt: today.setHours(12, 0), customer: {firstName: "Ashley"} },
    { startsAt: today.setHours(13, 0), customer: {firstName: "Jordan"} },
  ]

  beforeEach(() => {
    container = document.createElement("div");
    document.body.replaceChildren(container);
  });

  const render = component => act(() => {
    ReactDOM.createRoot(container).render(component);
  });

  it("renders a div with the right id", () => {
    render(<AppointmentDayView appointments={[]} />);

    expect(document.querySelector("div#appointmentDayView")).not.toBeNull();
  });

  it("renders an ordered list to display appointments", () => {
    render(<AppointmentDayView appointments={[]} />);

    const listElements = document.querySelector("ol");
    expect(listElements).not.toBeNull();
  });

  it("renders a list item for each appointment", () => {
    render(<AppointmentDayView appointments={twoAppointments} />);

    const listChildren = document.querySelectorAll("ol > li");
    expect(listChildren).toHaveLength(2);
  });

  it("renders the time of each appointment", () => {
    render(<AppointmentDayView appointments={twoAppointments} />);

    const listChildren = document.querySelectorAll("li");
    expect(listChildren[0].textContent).toEqual("12:00");
    expect(listChildren[1].textContent).toEqual("13:00");
  });

  it("initially shows a message saying there are no appointments today", () => {
    render(<AppointmentDayView appointments={[]} />);

    expect(document.body.textContent).toContain("There are no appointments scheduled for today");
  });

  it("selects the first appointment by default", () => {
    render(<AppointmentDayView appointments={twoAppointments} />);

    expect(document.body.textContent).toContain("Ashley");
  });
});
