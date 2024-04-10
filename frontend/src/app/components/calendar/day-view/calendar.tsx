import { CalendarProps, CalendarView } from '@/app/models/calendar-models'
import moment from 'moment'
import React, { useEffect, useState } from 'react'
import CalendarDayView from './calendar-day-view'

export default function Calendar({
    appointments,
    providers,
    selectedDate = moment(),
    workHoursStart,
    workHoursEnd,
}: CalendarProps) {
    const [view, setView] = useState<CalendarView>(CalendarView.DAY)
    const [mainHeight, setMainHeight] = useState<number>(0)

    useEffect(() => {
        const height = document.getElementsByTagName('main')[0].offsetHeight
        setMainHeight(height)
    }, [])

    function renderCalendarView(): React.ReactNode {
        switch (view) {
            case CalendarView.DAY:
                return (
                    <CalendarDayView
                        appointments={appointments}
                        providers={providers}
                        selectedDate={selectedDate}
                        workHoursStart={workHoursStart}
                        workHoursEnd={workHoursEnd}
                        calContainerHeight={mainHeight}
                    />
                )

            // TODO: Add week and month views

            default:
                return (
                    <CalendarDayView
                        appointments={appointments}
                        providers={providers}
                        selectedDate={selectedDate}
                        workHoursStart={workHoursStart}
                        workHoursEnd={workHoursEnd}
                        calContainerHeight={mainHeight}
                    />
                )
        }
    }

    function getFormattedSelectedDate(): string {
        return selectedDate.format('MMMM D, YYYY')
    }

    return (
        <div className='flex flex-col relative'>
            {/* CALENDAR HEADER */}
            <div className='text-center text-lg font-bold'>
                {getFormattedSelectedDate()}

                {/* TODO: add next/prev buttons */}
            </div>

            {/* CALENDAR BODY */}
            {!(appointments?.length > 0) && (
                <div className='absolute w-80 z-10 left-1/2 top-24 -translate-x-1/2 bg-primary text-primary-contrast-800 text-center shadow-md p'>
                    No appointments found.
                </div>
            )}
            {renderCalendarView()}
        </div>
    )
}
