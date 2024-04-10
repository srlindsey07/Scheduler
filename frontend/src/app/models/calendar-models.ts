import { Moment } from 'moment'
import { Appointment } from './appointment-models'
import { User } from './user-models'

export interface CalendarDayViewTimeProps {
    appointments: Appointment[]
    providers: User[]
    selectedDate: Moment
    workHoursStart: Moment
    workHoursEnd: Moment
}

export interface CalendarDayViewProps
    extends Omit<CalendarDayViewTimeProps, 'workHoursStart' | 'workHoursEnd'> {
    workHoursStart?: Moment
    workHoursEnd?: Moment
    calContainerHeight: number
}

export interface CalendarProps
    extends Omit<CalendarDayViewProps, 'selectedDate' | 'calContainerHeight'> {
    selectedDate?: Moment
}

export enum CalendarView {
    DAY,
    WEEK,
    MONTH,
}

export enum TimeFormat {
    DISPLAY = 'h:mm A',
    SHORT_DISPLAY = 'h A',
}
