import { ContactInfo, Name } from './shared-models'

export class User {
    id?: string
    name: Name
    role: UserRole
    contact: ContactInfo

    constructor(name: Name, role: UserRole, contact: ContactInfo) {
        this.name = name
        this.role = role
        this.contact = contact
    }
}

export enum UserRole {
    SCHEDULER,
    PROVIDER,
    ADMIN,
}
