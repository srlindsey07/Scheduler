import { TimeFormat } from '@/app/models/calendar-models'
import moment, { Moment } from 'moment'
import { useEffect, useRef, useState } from 'react'

export default function CurrentTimeMarker({
    getRowStart,
}: {
    getRowStart: (time: Moment) => string
}) {
    const myRef = useRef<HTMLLIElement>(null)
    const [currentTime, setCurrentTime] = useState<Moment>()

    useEffect(() => {
        setCurrentTime(moment())

        const timer = setInterval(() => {
            setCurrentTime(moment())
            console.log('set current time')
        }, 60000)

        return () => {
            clearInterval(timer)
        }
    }, [])

    return (
        <li
            className={`bg-secondary-600 col-span-full ${currentTime ? getRowStart(currentTime) : ''} h-[2px]`}
            title={`Current time is ${currentTime?.format(TimeFormat.DISPLAY)}`}
            ref={myRef}
        ></li>
    )
}
