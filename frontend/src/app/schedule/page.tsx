'use client'
import moment from 'moment'
import { useEffect, useState } from 'react'
import Calendar from '../components/calendar/calendar'
import {
    fetchAppointments,
    useAppointments,
} from '../context/AppointmentContext'
import { CalendarDateChange, CalendarView } from '../models/calendar-models'
import { User, UserRole } from '../models/user-models'
import { fetchUsersByRole } from '../services/users.service'
import NewAppointmentDialog from './new-appt-dialog'

export default function Schedule() {
    const { appointmentDispatch } = useAppointments()
    const [providers, setProviders] = useState<User[]>([])
    const [isOpen, setIsOpen] = useState<boolean>(false)

    useEffect(() => {
        fetchAppointments(
            appointmentDispatch,
            moment().startOf('day'),
            moment().endOf('day'),
        )
        getProviders()
    }, [appointmentDispatch])

    async function getProviders() {
        let response: User[] = await fetchUsersByRole([UserRole.PROVIDER])
        setProviders(response)
    }

    function dateChange(e: CalendarDateChange) {
        if (e.view === CalendarView.DAY) {
            fetchAppointments(
                appointmentDispatch,
                moment(e.newDate).startOf('day'),
                moment(e.newDate).endOf('day'),
            )
        } else {
            console.warn('Calendar is not set up for other views yet.')
        }
    }

    return (
        <>
            <NewAppointmentDialog
                open={isOpen}
                onClose={() => setIsOpen(false)}
            />

            <Calendar
                providers={providers}
                workHoursStart={moment().set({ hour: 8, minute: 0 })}
                workHoursEnd={moment().set({ hour: 17, minute: 0 })}
                onDateChange={(e) => dateChange(e)}
                defaultView={CalendarView.DAY}
                onCreateOpen={() => setIsOpen(true)}
            />
        </>
    )
}
