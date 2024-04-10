'use client'
import moment from 'moment'
import { useEffect, useState } from 'react'
import Calendar from '../components/calendar/day-view/calendar'
import { Appointment } from '../models/appointment-models'
import { User, UserRole } from '../models/user-models'
import { fetchAppointments } from '../services/appointments.service'
import { fetchUsersByRole } from '../services/users.service'
import { isLoading } from '../utils/loading'

export default function Schedule() {
    const [appointments, setAppointments] = useState<Appointment[]>([])
    const [providers, setProviders] = useState<User[]>([])
    const [dataIsLoading, setDataIsLoading] = useState<boolean[]>([])

    useEffect(() => {
        getAppointments()
        getProviders()
    }, [])

    async function getAppointments() {
        setDataIsLoading((prev) => isLoading(prev))

        const start = moment().startOf('day')
        const end = moment().endOf('day')

        let response: Appointment[] = await fetchAppointments(
            start.toISOString(),
            end.toISOString(),
        )
        setAppointments(response)
        setDataIsLoading((prev) => [...prev.slice(0, -1)])
    }

    async function getProviders() {
        setDataIsLoading((prev) => [...prev, true])

        let response: User[] = await fetchUsersByRole([UserRole.PROVIDER])
        setProviders(response)
        setDataIsLoading((prev) => [...prev.slice(0, 1)])
    }

    if (dataIsLoading.length) {
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
