import { Moment } from 'moment'

export class Appointment {
    id?: string
    patientId: string
    providerId: string
    start: Moment
    end: Moment
    status: AppointmentStatus
    type: AppointmentType
    allDay?: boolean

    constructor(
        patientId: string,
        providerId: string,
        start: Moment,
        end: Moment,
        status: AppointmentStatus,
        type: AppointmentType,
    ) {
        this.patientId = patientId
        this.providerId = providerId
        this.start = start
        this.end = end
        this.status = status
        this.type = type
    }
}

/* Class specifically for use in React Big Calendar component */
// export class CalendarAppointment {
//     id: string
//     patientId: string
//     resourceId: string // requires resourceId, not providerId
//     start: Date
//     end: Date
//     status: AppointmentStatus
//     type: AppointmentType
//     allDay: boolean

//     constructor(
//         id: string,
//         patientId: string,
//         providerId: string,
//         start: Date,
//         end: Date,
//         status: AppointmentStatus,
//         type: AppointmentType,
//         allDay: boolean = false,
//     ) {
//         this.id = id
//         this.patientId = patientId
//         this.resourceId = providerId
//         this.start = start
//         this.end = end
//         this.status = status
//         this.type = type
//         this.allDay = allDay
//     }
// }

export enum AppointmentStatus {
    SCHEDULED,
    CONFIRMED,
    CANCELED,
    COMPLETE,
}

export enum AppointmentType {
    ROUTINE,
    URGENT,
    FOLLOW_UP,
    NEW_PATIENT,
    OFFICE_VISIT,
}
