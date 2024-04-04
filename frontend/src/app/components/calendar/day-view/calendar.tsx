import { CalendarProps, CalendarView } from '@/app/models/calendar-models'
import moment from 'moment'
import React, { useState } from 'react'
import CalendarDayView from './calendar-day-view'

export default function Calendar({
    appointments,
    providers,
    selectedDate = moment(),
    workHoursStart,
    workHoursEnd,
}: CalendarProps) {
    const [view, setView] = useState<CalendarView>(CalendarView.DAY)

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
                    />
                )
        }
    }

    function getFormattedSelectedDate(): string {
        return selectedDate.format('MMMM D, YYYY')
    }

    return (
        <div className='flex flex-col'>
            {/* CALENDAR HEADER */}
            <div className='text-center text-lg font-bold'>
                {getFormattedSelectedDate()}

                {/* TODO: add next/prev buttons */}
            </div>

            {/* CALENDAR BODY */}
            {renderCalendarView()}
        </div>
    )
}
