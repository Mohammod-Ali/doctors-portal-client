import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from '../../BookingModal/BookingModal';
import Loading from '../../Shared/Loading/Loading';
import AppointmentOption from './AppointmentOption';

const AvailableAppointments = ({selectedDate}) => {
    // const [appointmentOptions, setAppointmentOptions] = useState([])
    const [treatment, setTreatment] = useState(null)

    const date = format(selectedDate, 'PP')

    const {data: appointmentOptions = [], refetch, isLoading} = useQuery({
        queryKey: ['appointmentOptions', date],
        queryFn: () => fetch(`http://localhost:5000/appointmentOptions?date=${date}`)
        .then(res => res.json())
    })

    if(isLoading){
        return <Loading></Loading>
    }

    // useEffect( () => {
    //     fetch('http://localhost:5000/appointmentOptions')
    //     .then(res => res.json())
    //     .then(data => setAppointmentOptions(data))
    // },[])

    return (
        <section className='my-16'>
            <p className='text-center text-primary font-bold'>Available Appointments on {format(selectedDate, 'PP')}</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6'>
                {
                    appointmentOptions.map(option => <AppointmentOption
                    key={option._id}
                    appointmentOption={option}
                    setTreatment={setTreatment}
                    ></AppointmentOption>)
                }
            </div>
            {
              treatment &&  <BookingModal
            treatment={treatment}
            selectedDate={selectedDate}
            setTreatment={setTreatment}
            refetch={refetch}
            ></BookingModal>
            }
        </section>
    );
};

export default AvailableAppointments;