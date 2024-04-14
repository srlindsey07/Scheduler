/**
 * Object to send new/updated appointment info to API
 *
 * @prop patientId {string}         Patient ID
 * @prop providerId {string}        Provider ID
 * @prop start {Date}               Start date/time
 * @prop end {Date}                 End date/time
 * @prop status {AppointmentStatus} Status of the appointment
 * @prop type {AppointmentType}     Type of appointment
 * */
export class AppointmentDTO {
    patientId: string
    providerId: string
    start: Date
    end: Date
    status: AppointmentStatus
    type: AppointmentType

    constructor(
        patientId: string,
        providerId: string,
        start: Date,
        end: Date,
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

/**
 * Object expected from API and used in the UI
 * @extends AppointmentDTO
 *
 * @prop patientId {string}         Patient ID
 * @prop providerId {string}        Provider ID
 * @prop start {Date}               Start date/time
 * @prop end {Date}                 End date/time
 * @prop status {AppointmentStatus} Status of the appointment
 * @prop type {AppointmentType}     Type of appointment
 * */
export class Appointment extends AppointmentDTO {
    id: string
    patientShortName: string

    constructor(
        id: string,
        patientId: string,
        patientShortName: string,
        providerId: string,
        start: Date,
        end: Date,
        status: AppointmentStatus,
        type: AppointmentType,
    ) {
        super(patientId, providerId, start, end, status, type)
        this.id = id
        this.patientShortName = patientShortName
    }
}

export interface AppointmentProps {
    appointment: Appointment
    className?: string
}

export enum AppointmentStatus {
    SCHEDULED = 'SCHEDULED',
    CONFIRMED = 'CONFIRMED',
    CANCELED = 'CANCELED',
    COMPLETE = 'COMPLETE',
}

export enum AppointmentType {
    ROUTINE = 'ROUTINE',
    URGENT = 'URGENT',
    FOLLOW_UP = 'FOLLOW_UP',
    NEW_PATIENT = 'NEW_PATIENT',
    OFFICE_VISIT = 'OFFICE_VISIT',
}
