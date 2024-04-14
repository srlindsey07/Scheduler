import {
    CalendarProps,
    CalendarView,
    DateFormat,
} from '@/app/models/calendar-models'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/16/solid'
import moment, { Moment } from 'moment'
import React, { useEffect, useState } from 'react'
import Button from '../../buttons/button'
import ButtonGroup from '../../buttons/button-group'
import CalendarDayView from './calendar-day-view'

export default function Calendar({
    appointments,
    providers,
    defaultDate = moment(),
    workHoursStart,
    workHoursEnd,
    onDateChange,
    defaultView = CalendarView.DAY,
}: CalendarProps) {
    const [view, setView] = useState<CalendarView>(defaultView)
    const [mainHeight, setMainHeight] = useState<number>(0)
    const [selectedDate, setSelectedDate] = useState<Moment>(defaultDate)
    const [loaded, setLoaded] = useState<boolean>(false)

    useEffect(() => {
        const height = document.getElementsByTagName('main')[0].offsetHeight
        setMainHeight(height)
        setLoaded(true)
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

    function changeSelectedDate(date: Moment): void {
        setSelectedDate(moment(date))

        if (onDateChange) {
            onDateChange({
                view: view,
                newDate: date,
            })
        }
    }

    return (
        <div className='flex flex-col relative border border-slate-300 rounded'>
            {/* CALENDAR HEADER */}
            <div className='text-lg font-bold bg-slate-100 px flex justify-between items-center h-20'>
                <div>{selectedDate.format(DateFormat.DISPLAY)}</div>

                <div className='flex'>
                    <ButtonGroup variant='outline'>
                        <Button
                            onClick={() =>
                                changeSelectedDate(
                                    selectedDate.subtract(1, 'days'),
                                )
                            }
                        >
                            <ChevronLeftIcon />
                        </Button>
                        <Button onClick={() => changeSelectedDate(moment())}>
                            Today
                        </Button>
                        <Button
                            onClick={() =>
                                changeSelectedDate(selectedDate.add(1, 'days'))
                            }
                        >
                            <ChevronRightIcon />
                        </Button>
                    </ButtonGroup>

                    <Button
                        variant='primary'
                        className='ml'
                    >
                        Create
                    </Button>
                </div>
            </div>

            {/* CALENDAR BODY */}
            {appointments?.length === 0 && loaded && (
                <div className='absolute w-80 z-10 left-1/2 top-24 -translate-x-1/2 bg-primary text-primary-contrast-800 text-center shadow-md p'>
                    No appointments found.
                </div>
            )}
            {renderCalendarView()}
        </div>
    )
}
