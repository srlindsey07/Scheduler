import { Appointment, CalendarAppointment } from "../models/appointment-models";

/**
 * Convert an existing appointment to a format to be consumed by  
 * React Big Calendar component.
 * 
 * @param appointment 
 * @returns appointment to be consumed by RBC
 */
export function appointmentToCalendar(appointment: Appointment): CalendarAppointment {
    if (!appointment.id) {
        throw new TypeError('Appointment has no ID');
    }
    
    return new CalendarAppointment(
        appointment.id,
        appointment.patientId,
        appointment.providerId,
        new Date(appointment.start),
        new Date(appointment.end),
        appointment.status,
        appointment.type,
        appointment.allDay !== undefined ? appointment.allDay : false
    )
}