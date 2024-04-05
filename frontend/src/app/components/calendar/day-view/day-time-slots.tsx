'use client'
import { AppointmentType } from '@/app/models/appointment-models'
import {
    CalendarDayViewTimeProps,
    TimeFormat,
} from '@/app/models/calendar-models'
import moment, { Moment } from 'moment'
import { useEffect, useRef, useState } from 'react'
import Appointment from './appointment'

const CurrentTimeMarker = ({
    rowStartClass,
    currentTime,
}: {
    rowStartClass: string
    currentTime: Moment
}) => {
    const myRef = useRef<HTMLLIElement>(null)

    // re-render from the setInterval makes the line jump back to center every minute
    useEffect(() => {
        if (myRef.current) {
            myRef.current.scrollIntoView({
                block: 'center',
            })
        }
    }, [])

    return (
        <li
            className={`bg-secondary-600 col-span-full ${rowStartClass} h-[2px]`}
            title={`Current time is ${currentTime.format(TimeFormat.DISPLAY)}`}
            ref={myRef}
        ></li>
    )
}

// TODO: Add click events to open appointment details
export default function DayTimeSlots({
    appointments,
    providers,
    selectedDate,
    workHoursStart,
    workHoursEnd,
}: CalendarDayViewTimeProps) {
    const [currentTime, setCurrentTime] = useState(moment())
    // set intervals for the full day
    const intervals30min: Moment[] = get30MinIntervals()
    const num5MinIntervals: number = getNum5MinIntervals(
        moment().startOf('day'),
        moment().endOf('day'),
    )

    // update the current time every minute to keep the current time marker accurate
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(moment())
        }, 60000)

        // clear on unmount
        return () => {
            clearInterval(timer)
        }
    }, [])

    // Creates an array containing the times of every 30 minutes between the start of the day and the end of the day
    function get30MinIntervals(): Moment[] {
        let dayStart = moment(moment().startOf('day'))
        let int: Moment[] = []

        while (dayStart.isSameOrBefore(moment().endOf('day'))) {
            int.push(moment(dayStart))
            dayStart.add(30, 'minutes')
        }
        return int
    }

    // Calculates number of 5 minute intervals between 2 times
    function getNum5MinIntervals(start: Moment, end: Moment): number {
        const diff = moment(end).diff(moment(start), 'minutes')
        return Math.ceil(diff / 5)
    }

    // Get class to render proper number of columns
    const gridColumnClass = (cols: number): string => {
        return `grid-cols-${cols}`
    }

    // Get class to place item in proper provider column
    function getProviderColumn(providerId: string): string {
        const providerIndex = appointments.findIndex(
            (appt) => appt.providerId === providerId,
        )

        return `col-start-${providerIndex + 1}`
    }

    // Get class to place item at proper start time
    function getStartRow(apptTime: Moment): string {
        const midnight = moment(apptTime).startOf('day')
        const intervals = getNum5MinIntervals(midnight, apptTime) + 2

        return `row-start-${intervals}`
    }

    // Get class to have item span proper number of 5 minute intervals
    function getApptLength(apptStart: Moment, apptEnd: Moment): string {
        const intervals = getNum5MinIntervals(apptStart, apptEnd)

        return `row-span-${intervals}`
    }

    // Determine if provided time is within provided working hours
    function isDuringWorkHours(time: Moment): boolean {
        if (
            time.isSameOrAfter(workHoursStart, 'minute') &&
            time.isBefore(workHoursEnd, 'minute')
        ) {
            return true
        }

        return false
    }

    function getAppointmentTypeClass(type: AppointmentType): string {
        switch (type) {
            case AppointmentType.ROUTINE:
                return 'bg-sky-100 text-sky-700 shadow-sm'

            case AppointmentType.URGENT:
                return 'bg-orange-100 text-orange-700 shadow-sm'

            case AppointmentType.FOLLOW_UP:
                return 'bg-lime-100 text-lime-700 shadow-sm'

            case AppointmentType.NEW_PATIENT:
                return 'bg-violet-100 text-violet-700 shadow-sm'

            case AppointmentType.OFFICE_VISIT:
                return 'bg-pink-100 text-pink-700 shadow-sm'

            default:
                return 'bg-sky-100 text-sky-700 shadow-sm'
        }
    }

    return (
        <div className='flex flex-col'>
            {/* STICKY_HEADER */}
            <div className='flex sticky top-0 bg-white shadow'>
                {/* Empty Time Area */}
                <div className='w-12 shrink-0 '></div>

                {/* Provider Column Headers */}
                <div
                    className={`grid ${gridColumnClass(providers.length)} grow`}
                >
                    {providers.length > 0 &&
                        providers.map((provider, i) => (
                            <div
                                key={`provider-col-${i}`}
                                className='border-x p-1 text-center font-bold'
                            >
                                {`${provider.name.first.charAt(0)}. ${provider.name.last}`}
                            </div>
                        ))}
                </div>
            </div>

            {/* BODY */}
            <div className='flex'>
                {/* Empty Time Gutter */}
                <div className='w-12 shrink-0'></div>

                {/* Time Area */}
                <div className={`grow grid grid-cols-1 grid-rows-1 h-[2500px]`}>
                    {/* grid to mark half hour intervals */}
                    <div
                        className='col-start-1 row-start-1 grid grid-cols-1 '
                        style={{
                            gridTemplateRows: `1.75rem repeat(${intervals30min.length}, minmax(0, 1fr))`,
                        }}
                    >
                        {/* extra space between time grid and header */}
                        <div className='h-[1.75rem] border-b p-1 bg-slate-100'></div>

                        {/* intervals */}
                        {intervals30min.length > 0 &&
                            intervals30min.map((interval, i) => (
                                <div
                                    key={`int-col-${i}`}
                                    className={`border-b p-1 ${!isDuringWorkHours(interval) && 'bg-slate-100'}`}
                                >
                                    <div className='w-10 text-xs font-bold text-right text-gray-500 -ml-12.5 -mt-3.5'>
                                        {interval.minute() === 0 &&
                                            interval.format(
                                                TimeFormat.SHORT_DISPLAY,
                                            )}
                                    </div>
                                </div>
                            ))}
                    </div>

                    {/* grid to mark provider columns */}
                    <div
                        className={`grid ${gridColumnClass(providers.length)} col-start-1 row-start-1`}
                    >
                        {providers.length > 0 &&
                            providers.map((provider, i) => (
                                <div
                                    key={`provider-col-${i}`}
                                    className='border p-1'
                                ></div>
                            ))}
                    </div>

                    {/* grid to display appointments and current time marker */}
                    <ul
                        className={`grid appointment-grid col-start-1 row-start-1 ${gridColumnClass(providers.length)}`}
                        style={{
                            gridTemplateRows: `1.75rem repeat(${num5MinIntervals}, minmax(0, 1fr))`,
                        }}
                    >
                        <CurrentTimeMarker
                            rowStartClass={getStartRow(currentTime)}
                            currentTime={currentTime}
                        />

                        {appointments.length > 0 &&
                            appointments.map((appt, i) => (
                                <Appointment
                                    key={`appt-${i}`}
                                    startTime={appt.start}
                                    title={appt.titleDisplay}
                                    type={appt.type}
                                    className={`${getProviderColumn(appt.providerId)} ${getStartRow(appt.start)} ${getApptLength(appt.start, appt.end)} ${getAppointmentTypeClass(appt.type)}`}
                                />
                            ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}
