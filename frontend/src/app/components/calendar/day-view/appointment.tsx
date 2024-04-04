import { AppointmentProps } from '@/app/models/appointment-models'
import { TimeFormat } from '@/app/models/calendar-models'

export default function Appointment({
    className,
    startTime,
    title,
}: AppointmentProps) {
    return (
        <li className={`bg-blue-100 m-1 p-1 rounded text-sm ${className}`}>
            <span>{`${startTime.format(TimeFormat.DISPLAY)} - ${title}`}</span>
        </li>
    )
}
