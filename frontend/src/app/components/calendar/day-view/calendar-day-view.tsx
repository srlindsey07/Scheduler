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
    const [mainHeight, setMainHeight] = useState<string>('0')

    useEffect(() => {
        const height = document.getElementsByTagName('main')[0].offsetHeight
        setMainHeight(`${height}px`)
    }, [])

    return (
        <div className='flex border'>
            {/* DAY VIEW TIMESLOTS */}
            <div
                className={`grow overflow-auto`}
                style={{ maxHeight: `calc(${mainHeight} - 4.35rem)` }}
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
            <div className='p text-xs'>
                {/* TODO: Create month view calendar */}
                (small calendar will go here)
            </div>
        </div>
    )
}
