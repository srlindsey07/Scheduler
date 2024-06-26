import { Moment } from 'moment'
import { User } from './user-models'

export interface CalendarDayViewTimeProps {
    providers: User[]
    workHoursStart?: Moment
    workHoursEnd?: Moment
}

export interface CalendarDayViewProps
    extends Omit<CalendarDayViewTimeProps, 'workHoursStart' | 'workHoursEnd'> {
    workHoursStart?: Moment
    workHoursEnd?: Moment
    calContainerHeight: number
}

export interface CalendarProps
    extends Omit<CalendarDayViewProps, 'calContainerHeight'> {
    defaultView?: CalendarView
    defaultDate?: Moment
    onDateChange?: (e: CalendarDateChange) => void
    onCreateOpen?: () => void
}

export interface CalendarDateChange {
    view: CalendarView
    newDate: Moment
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

export enum DateFormat {
    DISPLAY = 'MMMM D, YYYY',
}
