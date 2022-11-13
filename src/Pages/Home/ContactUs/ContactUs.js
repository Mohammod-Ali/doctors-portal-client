import React from "react";
import appointment from "../../../assets/images/appointment.png";

const ContactUs = () => {
  return (
    <div
      className="text-center rounded py-16"
      style={{
        background: `url(${appointment})`,
      }}
    >
      <p className="text-lg font-bold text-primary">Contact Us</p>
      <h3 className="text-3xl text-white mb-4">Stay connected with us</h3>
      <div className="mt-6">
        <input
          type="email"
          placeholder="Email Address"
          className="input input-bordered input-sm w-full max-w-xs m-3"
        />
        <br />
        <input
          type="text"
          placeholder="Subject"
          className="input input-bordered input-md w-full max-w-xs m-3"
        />
        <br />
        <input
          type="text"
          placeholder="Your message"
          className="input input-bordered input-lg w-full max-w-xs m-3"
        />
      </div>
      <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white font-bold mt-4">
        Submit
      </button>
    </div>
  );
};

export default ContactUs;
