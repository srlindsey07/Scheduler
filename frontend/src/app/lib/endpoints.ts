const API_BASE_URL: string | undefined = process.env.NEXT_PUBLIC_API_BASE_URL

export const APPOINTMENTS_API: string = `${API_BASE_URL}/appointments`
export const USERS_API: string = `${API_BASE_URL}/users`
