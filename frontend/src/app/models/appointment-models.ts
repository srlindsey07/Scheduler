import { Moment } from 'moment'

export class Appointment {
    id?: string
    patientId: string
    providerId: string
    start: Moment
    end: Moment
    status: AppointmentStatus
    type: AppointmentType
    titleDisplay: string // TODO: Add to API

    constructor(
        patientId: string,
        providerId: string,
        start: Moment,
        end: Moment,
        status: AppointmentStatus,
        type: AppointmentType,
        titleDisplay: string,
    ) {
        this.patientId = patientId
        this.providerId = providerId
        this.start = start
        this.end = end
        this.status = status
        this.type = type
        this.titleDisplay = titleDisplay
    }
}

export interface AppointmentProps {
    startTime: Moment
    title: string
    type: AppointmentType
    className?: string
}

export enum AppointmentStatus {
    SCHEDULED, // calendar
    CONFIRMED, // calendar-check
    CANCELED, // calendar-xmark
    COMPLETE, // circle-check
}

export enum AppointmentType {
    ROUTINE,
    URGENT,
    FOLLOW_UP,
    NEW_PATIENT,
    OFFICE_VISIT,
}
