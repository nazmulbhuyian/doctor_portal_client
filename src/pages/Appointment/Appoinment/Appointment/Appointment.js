import React, { useState } from 'react';
import AppointmentBanner from '../../AppointmentBanner/AppointmentBanner';
import AvailableAppointment from '../../AvailableAppointment/AvailableAppointment';

const Appointment = () => {

    const [selectedDate, setSelectedDate] = useState(new Date())
    console.log(selectedDate);

    const chnageDate = date => {
        if(!date){
            return
        }
        setSelectedDate(date)
    }

    return (
        <div>
            <AppointmentBanner selectedDate={selectedDate} setSelectedDate={chnageDate}></AppointmentBanner>
            <AvailableAppointment selectedDate={selectedDate}></AvailableAppointment>
        </div>
    );
};

export default Appointment;