'use client'
import moment, { Moment } from 'moment'
import { useEffect, useState } from 'react'
import Calendar from '../components/calendar/day-view/calendar'
import { Appointment } from '../models/appointment-models'
import { CalendarDateChange, CalendarView } from '../models/calendar-models'
import { User, UserRole } from '../models/user-models'
import { fetchAppointments } from '../services/appointments.service'
import { fetchUsersByRole } from '../services/users.service'
import { isLoading } from '../utils/loading'

export default function Schedule() {
    const [appointments, setAppointments] = useState<Appointment[]>([])
    const [providers, setProviders] = useState<User[]>([])
    const [dataIsLoading, setDataIsLoading] = useState<boolean[]>([])

    useEffect(() => {
        getAppointments(moment().startOf('day'), moment().endOf('day'))
        getProviders()
    }, [])

    async function getAppointments(startRange: Moment, endRange: Moment) {
        setDataIsLoading((prev) => isLoading(prev, true))
        const start = moment(startRange).startOf('day')
        const end = moment(endRange).endOf('day')

        let response: Appointment[] = await fetchAppointments(
            start.toISOString(),
            end.toISOString(),
        )
        setAppointments(response)
        setDataIsLoading((prev) => isLoading(prev, false))
    }

    async function getProviders() {
        setDataIsLoading((prev) => isLoading(prev, true))

        let response: User[] = await fetchUsersByRole([UserRole.PROVIDER])
        setProviders(response)
        setDataIsLoading((prev) => isLoading(prev, false))
    }

    function dateChange(e: CalendarDateChange) {
        if (e.view === CalendarView.DAY) {
            getAppointments(e.newDate.startOf('day'), e.newDate.startOf('day'))
        } else {
            console.warn('Calendar is not set up for other views yet.')
        }
    }

    // TODO: This loading block causes the page to not render.
    // if (dataIsLoading.length > 0) {
    //     return <div>Loading....</div>
    // }

    return (
        <Calendar
            appointments={appointments}
            providers={providers}
            workHoursStart={moment().set({ hour: 8, minute: 0 })}
            workHoursEnd={moment().set({ hour: 17, minute: 0 })}
            onDateChange={(e) => dateChange(e)}
            defaultView={CalendarView.DAY}
        />
    )
}
