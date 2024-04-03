import { Appointment } from '@/app/models/appointment-models'
import { CalendarView } from '@/app/models/calendar-models'
import { User } from '@/app/models/user-models'
import moment, { Moment } from 'moment'
import React, { useState } from 'react'
import CalendarDayView from './calendar-day-view'

interface CalendarProps {
    appointments: Appointment[]
    providers: User[]
    selectedDate?: Moment
}

export default function Calendar({
    appointments,
    providers,
    selectedDate = moment(),
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
                    />
                )

            default:
                return (
                    <CalendarDayView
                        appointments={appointments}
                        providers={providers}
                        selectedDate={selectedDate}
                    />
                )
        }
    }

    function getFormattedSelectedDate(): string {
        return selectedDate.format('MMMM D, YYYY')
    }

    return (
        <div className='flex flex-col'>
            {/* HEADER */}
            <div className='text-center text-lg font-bold'>
                {getFormattedSelectedDate()}

                {/* TODO: add next/prev buttons */}
            </div>

            {renderCalendarView()}
        </div>
    )
}
