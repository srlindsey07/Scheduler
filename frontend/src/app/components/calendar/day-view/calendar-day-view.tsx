import { Moment } from 'moment'
import DayTimeSlots from './day-time-slots'

interface CalendarDayViewProps {
    selectedDate: Moment
}

export default function CalendarDayView({
    selectedDate,
}: CalendarDayViewProps) {
    return (
        <div className='flex calendar__day-view'>
            {/* DAY VIEW TIMESLOTS */}
            <div className='grow'>
                <DayTimeSlots selectedDate={selectedDate} />
            </div>

            {/* SMALL CAL */}
            <div className='p bg-slate-100 text-xs'>
                {/* TODO: Create month view calendar */}
                (small calendar will go here)
            </div>
        </div>
    )
}
