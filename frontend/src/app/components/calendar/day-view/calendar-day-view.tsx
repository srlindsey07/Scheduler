import { Appointment } from '@/app/models/appointment-models'
import { User } from '@/app/models/user-models'
import { Moment } from 'moment'
import DayTimeSlots from './day-time-slots'

interface CalendarDayViewProps {
    appointments: Appointment[]
    providers: User[]
    selectedDate: Moment
}

export default function CalendarDayView({
    appointments,
    providers,
    selectedDate,
}: CalendarDayViewProps) {
    return (
        <div className='flex calendar__day-view'>
            {/* DAY VIEW TIMESLOTS */}
            <div className='grow'>
                <DayTimeSlots
                    appointments={appointments}
                    providers={providers}
                    selectedDate={selectedDate}
                />
            </div>

            {/* SMALL CAL */}
            <div className='p bg-slate-100 text-xs'>
                {/* TODO: Create month view calendar */}
                (small calendar will go here)
            </div>
        </div>
    )
}
