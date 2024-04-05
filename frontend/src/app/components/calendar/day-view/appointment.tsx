import { AppointmentProps } from '@/app/models/appointment-models'
import { TimeFormat } from '@/app/models/calendar-models'
import { faCalendar } from '@fortawesome/free-solid-svg-icons/faCalendar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Appointment({
    className,
    startTime,
    title,
    type,
}: AppointmentProps) {
    return (
        <li
            className={`bg-blue-100 m-1 p-1 rounded text-sm relative ${className}`}
        >
            <span>{`${startTime.format(TimeFormat.DISPLAY)} - ${title}`}</span>
            <FontAwesomeIcon
                icon={faCalendar}
                aria-label={type.toString()}
                className='bg-white rounded-full p-1.5 text-xs absolute -top-1.5 -right-0.5 shadow-sm'
            />
        </li>
    )
}
