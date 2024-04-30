'use client'
import * as appointmentService from '@/services/appointments.service'
import { Moment } from 'moment'
import { createContext, ReactNode, useContext, useReducer } from 'react'
import { Appointment } from '../models/appointment-models'

type Action =
    | { type: 'UPDATE_APPOINTMENTS'; payload: Appointment[] }
    | { type: 'GET_APPOINTMENTS'; payload: string }

type Dispatch = (action: Action) => void

type AppointmentProviderProps = { children: ReactNode }

type AppointmentState = {
    appointments: Appointment[]
}

const appointmentInitialState: AppointmentState = {
    appointments: [],
}

// Context
const AppointmentContext = createContext<
    | { appointmentState: AppointmentState; appointmentDispatch: Dispatch }
    | undefined
>(undefined)
AppointmentContext.displayName = 'AppointmentContext'

// Provider
export const AppointmentProvider = ({ children }: AppointmentProviderProps) => {
    const [appointmentState, appointmentDispatch] = useReducer(
        appointmentReducer,
        appointmentInitialState,
    )

    return (
        <AppointmentContext.Provider
            value={{ appointmentState, appointmentDispatch }}
        >
            {children}
        </AppointmentContext.Provider>
    )
}

// Context Hook
export const useAppointments = () => {
    const context = useContext(AppointmentContext)

    if (context === undefined) {
        throw new Error(
            'useAppointments must be used within a AppointmentProvider',
        )
    }

    return context
}

// Reducer
const appointmentReducer = (state: AppointmentState, action: Action) => {
    switch (action.type) {
        case 'UPDATE_APPOINTMENTS': {
            return {
                ...state,
                appointments: action.payload,
            }
        }

        default: {
            throw new Error(`Unhandled action type: ${action.type}`)
        }
    }
}

// Selectors
export const selectAppointments = (state: AppointmentState) =>
    state.appointments

// Helpers
export async function fetchAppointments(
    dispatch: Dispatch,
    startDate: Moment,
    endDate: Moment,
) {
    try {
        const appointments: Appointment[] =
            await appointmentService.fetchAppointments(
                startDate.toISOString(),
                endDate.toISOString(),
            )
        dispatch({
            type: 'UPDATE_APPOINTMENTS',
            payload: appointments,
        })
    } catch (error) {
        console.error(`Error fetching appointments: ${error}`)
    }
}
