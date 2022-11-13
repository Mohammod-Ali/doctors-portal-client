import React from 'react';
import treatment from '../../../assets/images/treatment.png'

const DentalCare = () => {
    return (
        <div className="hero  mt-28">
  <div className="hero-content flex-col lg:flex-row">
    <img alt='treatment' src={treatment} className="md:max-w-sm rounded-lg shadow-2xl" />
    <div className='lg:px-24 sm:mt-9'>
      <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
      <p className="py-6 ">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
      <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white font-bold">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default DentalCare;