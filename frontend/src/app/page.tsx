'use client'
import moment from 'moment'
import { useEffect, useState } from 'react'
import { Calendar, momentLocalizer, Views } from 'react-big-calendar'
import 'react-big-calendar/lib/sass/styles.scss'
import { Appointment, CalendarAppointment } from './models/appointment-models'
import { findAppointments } from './services/appointments.service'
import { appointmentToCalendar } from './utils/appointment-to-calendar'

// TODO: Get providers from API
const providers = [
    { providerId: '65ff4be0fc13ae7d2050fa9d', resourceTitle: 'Dr. Williams' },
    { providerId: '65ff4be0fc13ae7d2050faa2', resourceTitle: 'Dr. Smith' },
    { providerId: '65ff4be0fc13ae7d2050faa0', resourceTitle: 'Dr. Jones' },
    { providerId: '65ff4be0fc13ae7d2050fa9e', resourceTitle: 'Dr. Wilson' },
    { providerId: '65ff4be0fc13ae7d2050faa1', resourceTitle: 'Dr. Garcia' },
]

export default function Home() {
    const [appointments, setAppointments] = useState<CalendarAppointment[]>([])
    const [date, setDate] = useState(new Date())
    const localizer = momentLocalizer(moment)

    useEffect(() => {
        async function fetchAppointments() {
            const today = new Date()
            let res: Appointment[] = await findAppointments(
                '2024-03-01T00:00:00',
                '2024-03-31T00:00:00',
            )

            const _appointments: CalendarAppointment[] = res.map(
                (appointment: Appointment) => {
                    return appointmentToCalendar(appointment)
                },
            )

            setAppointments(_appointments)
        }
        fetchAppointments()
    }, [])

    if (appointments.length === 0) return <div>Loading...</div>

    return (
        <main>
            {/* TODO: Move to a different component*/}
            {/* TODO: Add styling */}
            <Calendar
                localizer={localizer}
                step={15}
                timeslots={4}
                defaultView={Views.DAY}
                defaultDate={new Date(2024, 2, 10)} // TODO: change to today
                min={new Date(2024, 0, 0, 6, 0, 0)}
                max={new Date(2024, 0, 0, 19, 0, 1)}
                events={appointments}
                resources={providers}
                resourceIdAccessor='providerId'
                resourceTitleAccessor='resourceTitle'
            />
        </main>
    )
}
