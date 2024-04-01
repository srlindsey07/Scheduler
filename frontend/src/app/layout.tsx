// import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'
import type { Metadata } from 'next'
import AppBar from './components/app-bar/app-bar'
import SideNav from './components/side-nav'
import './globals.css'

export const metadata: Metadata = {
    title: 'Appointment Scheduler',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang='en'>
            <body>
                <div className='flex'>
                    <SideNav />

                    <div className='w-full'>
                        <AppBar>
                            <h1>HEADER</h1>
                        </AppBar>

                        {/* subtract height of app bar from main height */}
                        <main className='h-[calc(100vh-3.5rem)] overflow-auto p'>
                            {children}
                        </main>
                    </div>
                </div>
            </body>
        </html>
    )
}
