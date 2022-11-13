import React from "react";
import doctor from '../../../assets/images/doctor.png'
import appointment from '../../../assets/images/appointment.png'

const MakeAppointment = () => {
  return (
    <section className="mt-32"
    style={{
        background: `url(${appointment})`
    }}
    >
      <div className="hero ">
        <div className="hero-content flex-col lg:flex-row">
          <img
          alt=""
            src={doctor}
            className="lg:w-1/2 hidden md:block rounded-lg shadow-2xl -mt-36"
          />
          <div>
            <h3 className="text-lg text-primary font-bold">Appointment</h3>
            <h1 className="text-4xl text-white font-bold">Make an appointment Today</h1>
            <p className="py-6 text-white">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page
            </p>
            <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white font-bold">Get Started</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeAppointment;
