'use client'
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons/faCalendarDays'
import { faHospitalUser } from '@fortawesome/free-solid-svg-icons/faHospitalUser'
import { faUserDoctor } from '@fortawesome/free-solid-svg-icons/faUserDoctor'
import { faUsers } from '@fortawesome/free-solid-svg-icons/faUsers'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Navigation from '../navigation/navigation'
import NavigationAction from '../navigation/navigation-action'

const routes = [{ title: 'Schedule', icon: '', path: '/' }]

export default function Sidebar() {
    function sidebarChange(e: any) {
        console.log(e)
    }

    return (
        <nav className='bg-primary-800 text-primary-contrast-800 p'>
            <Navigation
                onAction={(e) => sidebarChange(e)}
                defaultActive='SCHEDULE'
            >
                <NavigationAction
                    icon={<FontAwesomeIcon icon={faCalendarDays} />}
                    value='SCHEDULE'
                    label='Schedule'
                />

                <NavigationAction
                    icon={<FontAwesomeIcon icon={faHospitalUser} />}
                    value='PATIENTS'
                    label='Patients'
                    disabled
                />

                <NavigationAction
                    icon={<FontAwesomeIcon icon={faUserDoctor} />}
                    value='PROVIDERS'
                    label='Providers'
                    disabled
                />

                <NavigationAction
                    icon={<FontAwesomeIcon icon={faUserDoctor} />}
                    value='PROVIDERS'
                    label='Providers'
                    disabled
                />

                <NavigationAction
                    icon={<FontAwesomeIcon icon={faUsers} />}
                    value='USERS'
                    label='Users'
                    disabled
                />
            </Navigation>
        </nav>
    )
}
