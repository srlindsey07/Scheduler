import { CalendarDayViewProps } from '@/app/models/calendar-models'
import { memo } from 'react'
import DayTimeSlots from './day-time-slots'

function CalendarDayView({
    providers,
    workHoursStart,
    workHoursEnd,
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
export default memo(CalendarDayView)
