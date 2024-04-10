import { ContactInfo, Name } from './shared-models'

/**
 * Object to send new/updated user info to API
 *
 * @prop name {Name}            User's name
 * @prop role {UserRole}        User's role
 * @prop contact {ContactInfo}  User's contact information
 * */
export class UserDTO {
    name: Name
    role: UserRole
    contact: ContactInfo

    constructor(name: Name, role: UserRole, contact: ContactInfo) {
        this.name = name
        this.role = role
        this.contact = contact
    }
}

/**
 * Object expected from API and used in the UI
 * @extends UserDTO
 *
 * @prop id {string}            User's ID
 * @prop name {Name}            User's name
 * @prop role {UserRole}        User's role
 * @prop contact {ContactInfo}  User's contact information
 * */
export class User extends UserDTO {
    id: string

    constructor(id: string, name: Name, role: UserRole, contact: ContactInfo) {
        super(name, role, contact)
        this.id = id
    }
}

export enum UserRole {
    SCHEDULER = 'SCHEDULER',
    PROVIDER = 'PROVIDER',
    ADMIN = 'ADMIN',
}
