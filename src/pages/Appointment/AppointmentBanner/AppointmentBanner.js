
import chair from '../../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import chairBg from '../../../assets/images/bg.png'

const AppointmentBanner = ({selectedDate, setSelectedDate}) => {

    return (
        <section className=''
        style={{
            background: `url(${chairBg})`,
            backgroundSize: 'cover'
        }}>
            <div className="hero my-6">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} className="max-w-sm rounded-lg shadow-2xl" alt=''/>
                    <div className='mr-6'>
                    <DayPicker 
                    mode='single'
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppointmentBanner;