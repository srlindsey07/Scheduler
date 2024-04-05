import { CalendarDayViewProps } from '@/app/models/calendar-models'
import moment from 'moment'
import { useEffect, useState } from 'react'
import DayTimeSlots from './day-time-slots'

export default function CalendarDayView({
    appointments,
    providers,
    selectedDate,
    workHoursStart = moment(selectedDate).startOf('day'),
    workHoursEnd = moment(selectedDate).endOf('day'),
}: CalendarDayViewProps) {
    const [mainHeight, setMainHeight] = useState<number>(0)

    useEffect(() => {
        const height = document.getElementsByTagName('main')[0].offsetHeight
        setMainHeight(height)
    }, [])

    function getCalendarHeightClass(): string {
        return `max-h-[calc(${mainHeight}px-4.25rem)]`
    }

    return (
        <div className='flex border'>
            {/* DAY VIEW TIMESLOTS */}
            <div className={`grow ${getCalendarHeightClass()} overflow-auto`}>
                <DayTimeSlots
                    appointments={appointments}
                    providers={providers}
                    selectedDate={selectedDate}
                    workHoursStart={workHoursStart}
                    workHoursEnd={workHoursEnd}
                />
            </div>

            {/* SMALL CAL */}
            <div className='p text-xs'>
                {/* TODO: Create month view calendar */}
                (small calendar will go here)
            </div>
        </div>
    )
}
