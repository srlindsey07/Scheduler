import { CalendarView } from '@/app/models/calendar-models'
import moment, { Moment } from 'moment'
import React, { useState } from 'react'
import CalendarDayView from './calendar-day-view'

interface CalendarProps {
    selectedDate?: Moment
}

export default function Calendar({ selectedDate = moment() }: CalendarProps) {
    const [view, setView] = useState<CalendarView>(CalendarView.DAY)

    function renderCalendarView(): React.ReactNode {
        switch (view) {
            case CalendarView.DAY:
                return <CalendarDayView selectedDate={selectedDate} />

            default:
                return <CalendarDayView selectedDate={selectedDate} />
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
