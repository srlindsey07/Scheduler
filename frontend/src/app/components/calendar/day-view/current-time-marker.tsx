import { TimeFormat } from '@/app/models/calendar-models'
import moment, { Moment } from 'moment'
import { useEffect, useRef, useState } from 'react'

export default function CurrentTimeMarker({
    getRowStart,
}: {
    getRowStart: (time: Moment) => string
}) {
    const myRef = useRef<HTMLLIElement>(null)
    const [currentTime, setCurrentTime] = useState(moment())

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(moment())
            console.log(moment())
        }, 60000)

        // if (!!myRef.current) {
        //     myRef.current.scrollIntoView({
        //         block: 'center',
        //     })
        // }

        return () => {
            clearInterval(timer)
        }
    }, [])

    return (
        <li
            className={`bg-secondary-600 col-span-full ${getRowStart(currentTime)} h-[2px]`}
            title={`Current time is ${currentTime.format(TimeFormat.DISPLAY)}`}
            ref={myRef}
        ></li>
    )
}
