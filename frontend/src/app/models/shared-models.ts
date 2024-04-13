export class Name {
    first: string
    last: string

    constructor(first: string, last: string) {
        this.first = first
        this.last = last
    }
}

export class ContactInfo {
    email: string
    mobile: string

    constructor(email: string, mobile: string) {
        this.email = email
        this.mobile = mobile
    }
}

export enum ElevationClass {
    'shadow-none',
    'shadow-sm',
    'shadow',
    'shadow-md',
    'shadow-lg',
    'shadow-xl',
    'shadow-2x',
}
