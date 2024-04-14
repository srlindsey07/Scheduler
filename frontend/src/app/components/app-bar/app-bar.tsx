'use client'

export default function AppBar() {
    function onNavAction(e: string): void {}

    return (
        <header className='shadow bg-white'>
            <div className='flex items-center h-14 px'>
                <span className='text-2xl'>
                    <span className='text-secondary-600 font-medium'>appt</span>
                    <span className='text-primary font-bold'>SCHEDULER</span>
                </span>

                {/* <Navigation onAction={(e) => onNavAction(e)}>
                    <NavigationAction
                        icon={<FontAwesomeIcon icon={faCircleUser} />}
                        value='PROFILE'
                        label='Profile'
                    />
                </Navigation> */}
            </div>
        </header>
    )
}
