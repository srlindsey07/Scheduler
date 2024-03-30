import { Box } from '@mui/material'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import type { Metadata } from 'next'
import SideNav from './components/sidenav'
import TopBar from './components/top-bar'
import './globals.scss'
import customTheme from './styles/theme'

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
                <AppRouterCacheProvider>
                    <CssBaseline />
                    <ThemeProvider theme={customTheme}>
                        <Box sx={{ display: 'flex' }}>
                            <TopBar />

                            <SideNav />

                            <Box
                                component='main'
                                sx={{ flexGrow: 1, p: 3 }}
                            >
                                {children}
                            </Box>
                        </Box>
                    </ThemeProvider>
                </AppRouterCacheProvider>
            </body>
        </html>
    )
}
