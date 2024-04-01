import { APPOINTMENTS_API } from '../lib/endpoints'

// TODO: Determine return type
export async function fetchAppointments(
    startDate: any,
    endDate: any,
    providerId?: string,
    patientId?: string,
) {
    let params = new URLSearchParams({
        startDate: startDate,
        endDate: endDate,
    })

    if (providerId) {
        params.append('providerId', providerId)
    }
    if (patientId) {
        params.append('patientId', patientId)
    }

    try {
        const res: Response = await fetch(
            `${APPOINTMENTS_API}?${params.toString()}`,
            { method: 'GET' },
        )
        const data = await res.json()
        return data
    } catch (err) {
        console.error(`Could not fetch appointments: ${err}`)
    }
}
