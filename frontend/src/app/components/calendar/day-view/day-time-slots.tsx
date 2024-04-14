import {
    CalendarDayViewTimeProps,
    TimeFormat,
} from '@/app/models/calendar-models'
import moment, { Moment } from 'moment'
import Appointment from './appointment'
import CurrentTimeMarker from './current-time-marker'

// TODO: Add click events to open appointment details
export default function DayTimeSlots({
    appointments,
    providers,
    selectedDate,
    workHoursStart,
    workHoursEnd,
}: CalendarDayViewTimeProps) {
    // set intervals for the full day
    const intervals30min: Moment[] = get30MinIntervals()
    const num5MinIntervals: number = getNum5MinIntervals(
        moment().startOf('day'),
        moment().endOf('day'),
    )

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
        const providerIndex = providers.findIndex((p) => p.id === providerId)

        return `col-start-${providerIndex + 1}`
    }

    // Get class to place item at proper start time
    const getStartRow = (apptTime: Moment): string => {
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

    return (
        <div className='flex flex-col'>
            {/* STICKY_HEADER */}
            <div className='flex sticky top-0 z-10 bg-white shadow'>
                {/* Empty Time Area */}
                <div
                    id='timeGutter'
                    className='w-12 shrink-0'
                ></div>

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
                <div
                    className={`grow grid grid-cols-1 grid-rows-1 h-[2500px] relative`}
                >
                    {/* grid to mark half hour intervals */}
                    <div
                        className='col-start-1 row-start-1 grid grid-cols-1 '
                        style={{
                            gridTemplateRows: `1.75rem repeat(${intervals30min.length}, minmax(0, 1fr))`,
                        }}
                    >
                        {/* extra space between time grid and header */}
                        <div className='h-[1.75rem] border-b p-1 bg-slate-50'></div>

                        {/* intervals */}
                        {intervals30min.length > 0 &&
                            intervals30min.map((interval, i) => (
                                <div
                                    key={`int-col-${i}`}
                                    className={`border-b p-1 ${!isDuringWorkHours(interval) && 'bg-slate-50'}`}
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
                        className={`grid col-start-1 row-start-1 ${gridColumnClass(providers.length)}`}
                        style={{
                            gridTemplateRows: `1.75rem repeat(${num5MinIntervals}, minmax(0, 1fr))`,
                        }}
                    >
                        <CurrentTimeMarker getRowStart={getStartRow} />

                        {appointments?.length > 0 &&
                            appointments.map((appt, i) => (
                                <Appointment
                                    key={`appt-${i}`}
                                    appointment={appt}
                                    className={`${getApptLength(
                                        moment(appt.start),
                                        moment(appt.end),
                                    )} ${getProviderColumn(appt.providerId)} ${getStartRow(moment(appt.start))}`}
                                />
                            ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}
