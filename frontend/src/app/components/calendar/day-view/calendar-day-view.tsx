import { CalendarDayViewProps } from '@/app/models/calendar-models'
import moment from 'moment'
import DayTimeSlots from './day-time-slots'

export default function CalendarDayView({
    providers,
    selectedDate,
    workHoursStart = moment(selectedDate).startOf('day'),
    workHoursEnd = moment(selectedDate).endOf('day'),
    calContainerHeight,
}: CalendarDayViewProps) {
    return (
        <div className='flex h-full'>
            {/* DAY VIEW TIMESLOTS */}
            <div
                className={`grow overflow-auto relative`}
                style={{ height: `calc(${calContainerHeight}px - 7.6rem)` }}
            >
                {/* subtract calendar header height and padding above/below calendar */}
                <DayTimeSlots
                    providers={providers}
                    selectedDate={selectedDate}
                    workHoursStart={workHoursStart}
                    workHoursEnd={workHoursEnd}
                />
            </div>

            {/* SMALL CAL */}
            <div
                id='calSidebar'
                className='p text-xs hidden'
            >
                {/* TODO: Create month view calendar */}
                (small calendar will go here)
            </div>
        </div>
    )
}
