'use client'
import moment from 'moment'
import { useEffect, useState } from 'react'
import Calendar from '../components/calendar/day-view/calendar'
import { Appointment } from '../models/appointment-models'
import { User, UserRole } from '../models/user-models'
import { fetchAppointments } from '../services/appointments.service'

// TODO: Get providers from API
const providers: User[] = [
    {
        id: '65ff4be0fc13ae7d2050fa9e', //
        name: { first: 'Joseph', last: 'Williams' },
        role: UserRole.PROVIDER,
        contact: { email: '', mobile: '' },
    },
    {
        id: '65ff4be0fc13ae7d2050fa9d', //
        name: { first: 'Jessica', last: 'Smith' },
        role: UserRole.PROVIDER,
        contact: { email: '', mobile: '' },
    },
    {
        id: '65ff4be0fc13ae7d2050faa0', //
        name: { first: 'Amy', last: 'Jones' },
        role: UserRole.PROVIDER,
        contact: { email: '', mobile: '' },
    },
    {
        id: '65ff4be0fc13ae7d2050faa2', //
        name: { first: 'Sean', last: 'Wilson' },
        role: UserRole.PROVIDER,
        contact: { email: '', mobile: '' },
    },
    {
        id: '65ff4be0fc13ae7d2050faa1', //
        name: { first: 'Miguel', last: 'Garcia' },
        role: UserRole.PROVIDER,
        contact: { email: '', mobile: '' },
    },
]

export default function Schedule() {
    const [appointments, setAppointments] = useState<Appointment[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)

    useEffect(() => {
        getAppointments()
    }, [])

    async function getAppointments() {
        setIsLoading(true)

        const start = moment().startOf('day')
        const end = moment().endOf('day')

        let response: Appointment[] = await fetchAppointments(
            start.toISOString(),
            end.toISOString(),
        )
        console.log(response)
        setAppointments(response)
        setIsLoading(false)
    }

    if (isLoading) {
        return <div>Loading....</div>
    }

    return (
        <div>
            <Calendar
                appointments={appointments}
                providers={providers}
                workHoursStart={moment().set({ hour: 8, minute: 0 })}
                workHoursEnd={moment().set({ hour: 17, minute: 0 })}
            />
        </div>
    )
}
