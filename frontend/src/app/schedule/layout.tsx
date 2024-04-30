import { ReactNode } from 'react'
import { AppointmentProvider } from '../context/AppointmentContext'
import { CalendarProvider } from '../context/CalendarContext'

export default function ScheduleLayout({ children }: { children: ReactNode }) {
    return (
        <AppointmentProvider>
            <CalendarProvider>{children}</CalendarProvider>
        </AppointmentProvider>
    )
}
