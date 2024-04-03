'use client'
import { Appointment } from '@/app/models/appointment-models'
import { User } from '@/app/models/user-models'
import moment, { Moment } from 'moment'

interface DayViewTimeSlotProps {
    appointments: Appointment[]
    providers: User[]
    selectedDate: Moment
    dayStart?: Moment
    dayEnd?: Moment
}

/**
 *
 * @param dayStart Optional. Defaults to beginning of today.
 * @param dayEnd   Optional. Defaults to end of today.
 * @returns
 */
// TODO: Fix up styling, add click events to open appointment details
export default function DayTimeSlots({
    appointments,
    providers,
    selectedDate,
    dayStart = moment(selectedDate).startOf('day'),
    dayEnd = moment(selectedDate).endOf('day'),
}: DayViewTimeSlotProps) {
    const intervals30min: Moment[] = get30MinIntervals()
    const num5MinIntervals: number = getNum5MinIntervals()

    function get30MinIntervals(): Moment[] {
        let start = moment(dayStart)
        let int: Moment[] = []

        while (start.isSameOrBefore(dayEnd)) {
            int.push(moment(start))
            start.add(30, 'minutes')
        }
        return int
    }

    function getNum5MinIntervals(): number {
        const diff = moment(dayEnd).diff(moment(dayStart), 'minutes')
        return Math.ceil(diff / 5)
    }

    const gridColumns = (cols: number): string => {
        return `grid-cols-${cols}`
    }

    function getIntervalTime(int: Moment): string {
        let hour: number = int.hour()

        if (int.hour() > 12) {
            hour = hour - 12
        } else if (int.hour() === 0) {
            hour = 12
        }

        return `${hour} ${int.hour() < 12 ? 'AM' : 'PM'}`
    }

    return (
        <div className='flex flex-col border-collapse'>
            {/* STICKY_HEADER */}
            <div className='flex'>
                {/* EMPTY TIME GUTTER */}
                <div className='w-12 shrink-0'></div>

                {/* PROVIDER_COLUMNS*/}
                <div className={`grid ${gridColumns(providers.length)} grow`}>
                    {providers.length > 0 &&
                        providers.map((provider, i) => (
                            <div
                                key={`provider-col-${i}`}
                                className='border p-1 text-center font-bold'
                            >
                                {`${provider.name.first.charAt(0)}. ${provider.name.last}`}
                            </div>
                        ))}
                </div>
            </div>

            {/* BODY */}
            <div className='flex'>
                {/* EMPTY TIME GUTTER */}
                <div className='w-12 shrink-0'></div>

                {/* TIME AREA */}
                <div className={`grow grid grid-cols-1 grid-rows-1 h-[2500px]`}>
                    {/* half hour row markers */}
                    <div
                        className='col-start-1 row-start-1 grid grid-cols-1 '
                        style={{
                            gridTemplateRows: `repeat(${intervals30min.length}, minmax(0, 1fr))`,
                        }}
                    >
                        {intervals30min.length > 0 &&
                            intervals30min.map((interval, i) => (
                                <div
                                    key={`int-col-${i}`}
                                    className='border-b p-1'
                                >
                                    <div className='w-10 text-xs font-bold text-right text-gray-500 -ml-12.5 -mt-3.5'>
                                        {interval.minute() === 0 &&
                                            getIntervalTime(interval)}
                                    </div>
                                </div>
                            ))}
                    </div>

                    {/* provider column markers */}
                    <div
                        className={`grid ${gridColumns(providers.length)} col-start-1 row-start-1`}
                    >
                        {providers.length > 0 &&
                            providers.map((provider, i) => (
                                <div
                                    key={`provider-col-${i}`}
                                    className='border p-1'
                                ></div>
                            ))}
                    </div>

                    {/* appointments */}
                    {/* one col per provider, 1 row per 5 min interval */}
                    {/* TODO: wire up actual appointments */}
                    <ol
                        className={`grid appointment-grid col-start-1 row-start-1 ${gridColumns(providers.length)}`}
                        style={{
                            gridTemplateRows: `repeat(${num5MinIntervals}, minmax(0, 1fr))`,
                        }}
                    >
                        <li
                            className={`bg-blue-100 col-start-3 row-start-[7] row-span-5 `}
                        >
                            APPOINTMENT 1
                        </li>

                        <li
                            className={`bg-blue-100 col-start-4 row-start-[20] row-span-20 `}
                        >
                            APPOINTMENT 2
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    )
}

// grid-template-columns 142.375px 142.375px 142.375px 142.391px 142.375px
// grid-template-rows 10.4062px 10.4062p

// grid-template-columns 142.375px 142.375px 142.375px 142.391px 142.375px
// grid-template-rows 4.79688px 4.79688px 4.
