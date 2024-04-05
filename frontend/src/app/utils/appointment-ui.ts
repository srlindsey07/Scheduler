import { AppointmentType } from '@/app/models/appointment-models'
import moment from 'moment'
import { Appointment } from '../models/appointment-models'
import {
    AppointmentResponse,
    AppointmentStatus,
} from './../models/appointment-models'

export function appointmentFormatter(
    appointment: AppointmentResponse,
): Appointment {
    if (!appointment.id) {
        throw new TypeError('Appointment has no ID')
    }

    return new Appointment(
        appointment.id,
        appointment.providerId,
        moment(appointment.start),
        moment(appointment.end),
        AppointmentStatus[appointment.status as keyof typeof AppointmentStatus],
        AppointmentType[appointment.type as keyof typeof AppointmentType],
        'TES, T', // temporary until this is added to response
    )
}
