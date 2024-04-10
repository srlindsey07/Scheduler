import { CalendarDayViewProps } from '@/app/models/calendar-models'
import moment from 'moment'
import DayTimeSlots from './day-time-slots'

export default function CalendarDayView({
    appointments,
    providers,
    selectedDate,
    workHoursStart = moment(selectedDate).startOf('day'),
    workHoursEnd = moment(selectedDate).endOf('day'),
    calContainerHeight,
}: CalendarDayViewProps) {
    return (
        <div className='flex border'>
            {/* DAY VIEW TIMESLOTS */}
            <div
                className={`grow overflow-auto relative`}
                style={{ maxHeight: `calc(${calContainerHeight}px - 4.35rem)` }}
            >
                <DayTimeSlots
                    appointments={appointments}
                    providers={providers}
                    selectedDate={selectedDate}
                    workHoursStart={workHoursStart}
                    workHoursEnd={workHoursEnd}
                />
            </div>

            {/* SMALL CAL */}
            <div
                id='calSidebar'
                className='p text-xs'
            >
                {/* TODO: Create month view calendar */}
                (small calendar will go here)
            </div>
        </div>
    )
}
