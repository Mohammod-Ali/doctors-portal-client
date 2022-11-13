import React, { useState } from 'react';
import chair from '../../../assets/images/chair.png'
import bg from '../../../assets/images/bg.png'
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';

const AppointmentBanner = ({selectedDate, setSelectedDate}) => {
    
    return (
        <header className='my-6'>
             <div className="hero pb-32  "
    style={{
      background: `url(${bg})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
  }}
    >
      <div className="hero-content flex-col lg:flex-row-reverse pt-32">
        <img alt=""
          src={chair}
          className="lg:w-1/2 rounded-lg shadow-2xl"
        />
        <div className='mr-6'>
          <DayPicker
            mode='single'
            selected={selectedDate}
            onSelect={setSelectedDate}
          ></DayPicker>
          <p>You have selected date: {format(selectedDate, 'PP')}</p>
        </div>
      </div>
    </div>
        </header>
    );
};

export default AppointmentBanner;