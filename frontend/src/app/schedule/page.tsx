'use client'
// import { Paper } from '@mui/material'
import { useEffect, useState } from 'react'
// import {
//     momentLocalizer,
//     Navigate,
//     NavigateAction,
//     View,
// } from 'react-big-calendar'
import moment, { Moment } from 'moment'
import Calendar from '../components/calendar/day-view/calendar'
import { CalendarAppointment } from '../models/appointment-models'

// TODO: Get providers from API
const providers = [
    { providerId: '65ff4be0fc13ae7d2050fa9d', resourceTitle: 'Dr. Williams' },
    { providerId: '65ff4be0fc13ae7d2050faa2', resourceTitle: 'Dr. Smith' },
    { providerId: '65ff4be0fc13ae7d2050faa0', resourceTitle: 'Dr. Jones' },
    { providerId: '65ff4be0fc13ae7d2050fa9e', resourceTitle: 'Dr. Wilson' },
    { providerId: '65ff4be0fc13ae7d2050faa1', resourceTitle: 'Dr. Garcia' },
]

export default function Schedule() {
    const [appointments, setAppointments] = useState<CalendarAppointment[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [viewDate, setViewDate] = useState<Date>(new Date())

    useEffect(() => {
        console.log('Run')
    }, [])

    // const localizer = momentLocalizer(moment)
    // const theme = useTheme()

    // useEffect(() => {
    //     getAppointments()
    // }, [])

    // async function getAppointments() {
    //     setIsLoading(true)
    const today: Moment = moment()
    //     const start = moment(today).hour(0).minute(0).second(0).millisecond(0)
    //     const end = moment(today)
    //         .date(today.date() + 1)
    //         .hour(0)
    //         .minute(0)
    //         .second(0)
    //         .millisecond(0)

    //     let response: Appointment[] = await fetchAppointments(
    //         start.toISOString(),
    //         end.toISOString(),
    //     )
    //     const convertedAppts: CalendarAppointment[] = response.map((res) => {
    //         return appointmentToCalendar(res)
    //     })

    //     setAppointments(convertedAppts)
    //     setIsLoading(false)
    // }

    // const onCalendarNavigate = useCallback(
    //     (date: Date, view: View, action: NavigateAction): void => {
    //         let newDate: Date = viewDate

    //         if (action === Navigate.PREVIOUS) {
    //             newDate.setDate(viewDate.getDate() - 1)
    //         } else if (action === Navigate.NEXT) {
    //             newDate.setDate(viewDate.getDate() + 1)
    //         } else if (action === Navigate.TODAY) {
    //             newDate = new Date()
    //         }

    //         return setViewDate(new Date(newDate))
    //     },
    //     [],
    // )

    // const calendarHeight = (): number => {
    //     // from vh, subtract header height (64px), section top-padding (24px)
    //     // and additional padding height to create appearance of bottom padding(24px)
    //     return window.innerHeight - 112
    // }

    if (isLoading) {
        return <div>Loading....</div>
    }

    return (
        <div>
            <Calendar />
        </div>

        // <div>
        //     {/* <Paper
        //         sx={{
        //             height: calendarHeight,
        //             '.rbc-time-header': {
        //                 // boxShadow: (theme) => theme.shadows[3],
        //             },
        //         }}
        //     > */}
        //     <Calendar
        //         localizer={localizer}
        //         step={15}
        //         timeslots={4}
        //         defaultView={Views.DAY}
        //         date={viewDate}
        //         events={appointments}
        //         resources={providers}
        //         resourceIdAccessor={'providerId'}
        //         resourceTitleAccessor={'resourceTitle'}
        //         allDayMaxRows={0}
        //         onNavigate={(date, view, action) =>
        //             onCalendarNavigate(date, view, action)
        //         }
        //         scrollToTime={new Date()}
        //     />
        //     {/* </Paper> */}
        // </div>
    )
}
