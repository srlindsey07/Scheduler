import {
    AppointmentProps,
    AppointmentStatus,
} from '@/app/models/appointment-models'
import { TimeFormat } from '@/app/models/calendar-models'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { faCalendar } from '@fortawesome/free-solid-svg-icons/faCalendar'
import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons/faCalendarCheck'
import { faCalendarXmark } from '@fortawesome/free-solid-svg-icons/faCalendarXmark'
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Appointment({
    className,
    startTime,
    title,
    status,
}: AppointmentProps) {
    function getStatusIcon(): IconDefinition {
        switch (status) {
            case AppointmentStatus.SCHEDULED:
                return faCalendar

            case AppointmentStatus.CONFIRMED:
                return faCalendarCheck

            case AppointmentStatus.CANCELED:
                return faCalendarXmark

            case AppointmentStatus.COMPLETE:
                return faCheck

            default:
                return faCalendar
        }
    }

    function getIconStyling(): string {
        switch (status) {
            case AppointmentStatus.SCHEDULED:
                return 'text-slate-600'

            case AppointmentStatus.CONFIRMED:
                return 'text-green-600'

            case AppointmentStatus.CANCELED:
                return 'text-red-600'

            case AppointmentStatus.COMPLETE:
                return 'text-green-600'

            default:
                return 'text-slate-600'
        }
    }

    return (
        <li
            className={`bg-blue-100 m-1 p-1 rounded text-sm relative ${className}`}
        >
            <span>{`${startTime.format(TimeFormat.DISPLAY)} - ${title}`}</span>
            <FontAwesomeIcon
                icon={getStatusIcon()}
                aria-label={status.toString()}
                className={`bg-white rounded-full p-1.5 text-sm absolute -top-1.5 -right-0.5 shadow-sm ${getIconStyling()}`}
            />
        </li>
    )
}
