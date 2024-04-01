// import { AppBar, Toolbar } from '@mui/material'

export default function AppBarContainer({
    children,
}: Readonly<{
    children?: React.ReactNode
}>) {
    return <div className='flex items-center h-14 px'>{children}</div>
}
