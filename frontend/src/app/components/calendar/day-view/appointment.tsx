import {
    AppointmentProps,
    AppointmentStatus,
    AppointmentType,
} from '@/app/models/appointment-models'
import { TimeFormat } from '@/app/models/calendar-models'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { faCalendar } from '@fortawesome/free-solid-svg-icons/faCalendar'
import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons/faCalendarCheck'
import { faCalendarXmark } from '@fortawesome/free-solid-svg-icons/faCalendarXmark'
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import moment from 'moment'
import { useMemo } from 'react'

export default function Appointment({
    appointment,
    className = '',
}: AppointmentProps) {
    const start = moment(appointment.start)

    function getStatusIcon(): IconDefinition {
        switch (appointment.status) {
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
    const statusIcon = useMemo(() => {
        switch (appointment.status) {
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
    }, [appointment])

    function getIconStyling(): string {
        switch (appointment.status) {
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

    function getAppointmentTypeClass(): string {
        switch (appointment.type) {
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
        <li
            className={`bg-blue-100 m-1 p-1 rounded-xl text-sm relative ${getAppointmentTypeClass()} ${className}`}
        >
            <span>{`${start.format(TimeFormat.DISPLAY)} - ${appointment.patientShortName}`}</span>
            <FontAwesomeIcon
                icon={statusIcon}
                title={appointment.status.toString()}
                className={`bg-white rounded-full p-1.5 text-sm absolute -top-1.5 -right-0.5 shadow-sm ${getIconStyling()}`}
            />
        </li>
    )
}
