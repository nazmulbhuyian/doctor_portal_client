import React from 'react';

const AvailableOption = ({ appointmentOption, setTreatment }) => {

    const { name, slots, price } = appointmentOption;

    return (
        <div className="card shadow-xl">
            <div className="card-body text-center">
                <h2 className="text-2xl font-bold text-secondary">{name}</h2>
                <p>{slots.length > 0 ? slots[0] : 'Try Another Day'}</p>
                <p>{slots.length} {slots.length > 0 ? 'spaces' : 'space'} Available</p>
                <p>Price: ${price}</p>
                <div className="card-actions justify-center">
                    <label
                     htmlFor="booking-modal"
                     disabled={slots.length === 0}
                     onClick={() => setTreatment(appointmentOption)}
                      className="btn btn-primary text-white">Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default AvailableOption;