import { APPOINTMENTS_API } from '../lib/endpoints'

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
        return await fetch(`${APPOINTMENTS_API}?${params.toString()}`, {
            method: 'GET',
        }).then((response) => {
            if (!response.ok) {
                throw new Error(`There was an error ${response.statusText}`)
            }
            return response.json()
        })
    } catch (err) {
        console.error(`Could not fetch appointments: ${err}`)
    }
}
