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
    className?: string
}

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
