'use client'
import moment from 'moment'
import { useState } from 'react'
import Calendar from '../components/calendar/day-view/calendar'
import {
    Appointment,
    AppointmentStatus,
    AppointmentType,
} from '../models/appointment-models'
import { User, UserRole } from '../models/user-models'

// TODO: Get providers from API
const providers: User[] = [
    {
        id: '65ff4be0fc13ae7d2050fa9d',
        name: { first: 'Joseph', last: 'Williams' },
        role: UserRole.PROVIDER,
        contact: { email: '', mobile: '' },
    },
    {
        id: '65ff4be0fc13ae7d2050faa2',
        name: { first: 'Jessica', last: 'Smith' },
        role: UserRole.PROVIDER,
        contact: { email: '', mobile: '' },
    },
    {
        id: '65ff4be0fc13ae7d2050faa0',
        name: { first: 'Amy', last: 'Jones' },
        role: UserRole.PROVIDER,
        contact: { email: '', mobile: '' },
    },
    {
        id: '65ff4be0fc13ae7d2050fa9e',
        name: { first: 'Sean', last: 'Wilson' },
        role: UserRole.PROVIDER,
        contact: { email: '', mobile: '' },
    },
    {
        id: '65ff4be0fc13ae7d2050faa1',
        name: { first: 'Miguel', last: 'Garcia' },
        role: UserRole.PROVIDER,
        contact: { email: '', mobile: '' },
    },
]
const appointments: Appointment[] = [
    {
        id: '66005c73fc13ae7b3650fc46',
        type: AppointmentType.FOLLOW_UP,
        status: AppointmentStatus.CONFIRMED,
        start: moment().set({
            hour: 11,
            minute: 45,
            second: 0,
            millisecond: 0,
        }),
        end: moment().set({ hour: 12, minute: 15, second: 0, millisecond: 0 }),
        providerId: '65ff4be0fc13ae7d2050faa2',
        patientId: '65ff4b94fc13ae7bd250faaa',
    },
    {
        id: '66005c73fc13ae7b3650fc47',
        type: AppointmentType.URGENT,
        status: AppointmentStatus.CONFIRMED,
        start: moment().set({
            hour: 8,
            minute: 0,
            second: 0,
            millisecond: 0,
        }),
        end: moment().set({ hour: 8, minute: 45, second: 0, millisecond: 0 }),
        providerId: '65ff4be0fc13ae7d2050faa2',
        patientId: '65ff4b94fc13ae7bd250fa9c',
    },
    {
        id: '66005c73fc13ae7b3650fc48',
        type: AppointmentType.ROUTINE,
        status: AppointmentStatus.SCHEDULED,
        start: moment().set({
            hour: 14,
            minute: 45,
            second: 0,
            millisecond: 0,
        }),
        end: moment().set({ hour: 15, minute: 0, second: 0, millisecond: 0 }),
        providerId: '65ff4be0fc13ae7d2050faa1',
        patientId: '65ff4b94fc13ae7bd250faa1',
    },
    {
        id: '66005c73fc13ae7b3650fc49',
        type: AppointmentType.NEW_PATIENT,
        status: AppointmentStatus.CONFIRMED,
        start: moment().set({
            hour: 16,
            minute: 0,
            second: 0,
            millisecond: 0,
        }),
        end: moment().set({ hour: 16, minute: 45, second: 0, millisecond: 0 }),
        providerId: '65ff4be0fc13ae7d2050fa9d',
        patientId: '65ff4b94fc13ae7bd250faa0',
    },
]

export default function Schedule() {
    // const [appointments, setAppointments] = useState<CalendarAppointment[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [viewDate, setViewDate] = useState<Date>(new Date())

    if (isLoading) {
        return <div>Loading....</div>
    }

    return (
        <div>
            <Calendar
                appointments={appointments}
                providers={providers}
            />
        </div>
    )
}
