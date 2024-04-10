import { USERS_API } from '../lib/endpoints'
import { UserRole } from '../models/user-models'

export async function fetchUsersByRole(roles: UserRole[]) {
    let params = new URLSearchParams(
        roles.map((role) => ['role', role.toString()]),
    )

    try {
        return await fetch(`${USERS_API}?${params.toString()}`, {
            method: 'GET',
        }).then((response) => {
            if (!response.ok) {
                throw new Error(
                    `There was an error fetching users: ${response.statusText}`,
                )
            }
            return response.json()
        })
    } catch (err) {
        console.error(`Could not fetch users: ${err}`)
    }
}
