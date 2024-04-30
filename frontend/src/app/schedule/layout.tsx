import { ReactNode } from 'react'
import { AppointmentProvider } from '../context/AppointmentContext'

export default function ScheduleLayout({ children }: { children: ReactNode }) {
    return <AppointmentProvider>{children}</AppointmentProvider>
}
