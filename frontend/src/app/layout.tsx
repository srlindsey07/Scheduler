import type { Metadata } from 'next'
import './globals.scss'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'
import { ThemeProvider } from '@mui/material/styles'
import theme from './styles/theme'
import CssBaseline from '@mui/material/CssBaseline';

export const metadata: Metadata = {
    title: 'Appointment Scheduler',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body>
                <AppRouterCacheProvider>
                    <CssBaseline />
                    <ThemeProvider theme={theme}>
                        {children}
                    </ThemeProvider> 
                </AppRouterCacheProvider>
            </body>
        </html>
    )
}
