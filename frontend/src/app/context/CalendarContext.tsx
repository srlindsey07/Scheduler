'use client'
import moment, { Moment } from 'moment'
import { createContext, ReactNode, useContext, useReducer } from 'react'

type Action =
    | { type: 'CREATE_DIALOG_TOGGLE'; payload: boolean }
    | { type: 'UPDATE_ACTIVE_DATE'; payload: Moment }

type Dispatch = (action: Action) => void

type CalendarProviderProps = { children: ReactNode }

type CalendarState = {
    createDialogOpen: boolean
    activeDate: Moment
}

const calendarInitialState: CalendarState = {
    createDialogOpen: false,
    activeDate: moment(),
}

// Context
const CalendarContext = createContext<
    { calendarState: CalendarState; calendarDispatch: Dispatch } | undefined
>(undefined)
CalendarContext.displayName = 'CalendarContext'

// Reducer
const calendarReducer = (state: CalendarState, action: Action) => {
    switch (action.type) {
        case 'CREATE_DIALOG_TOGGLE': {
            return {
                ...state,
                createDialogOpen: action.payload,
            }
        }

        case 'UPDATE_ACTIVE_DATE': {
            return {
                ...state,
                activeDate: action.payload,
            }
        }

        default: {
            throw new Error(`Unhandled action type: ${action}`)
        }
    }
}

// Provider
export const CalendarProvider = ({ children }: CalendarProviderProps) => {
    const [calendarState, calendarDispatch] = useReducer(
        calendarReducer,
        calendarInitialState,
    )

    return (
        <CalendarContext.Provider value={{ calendarState, calendarDispatch }}>
            {children}
        </CalendarContext.Provider>
    )
}

// Context Hook
export const useCalendar = () => {
    const context = useContext(CalendarContext)

    if (context === undefined) {
        throw new Error('useCalendar must be used within a CalendarProvider')
    }

    return context
}
