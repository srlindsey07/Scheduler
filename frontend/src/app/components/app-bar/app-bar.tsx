import AppBarContainer from './app-bar-container'

export default function AppBar({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <header className='shadow bg-white'>
            <AppBarContainer>{children}</AppBarContainer>
        </header>
    )
}
