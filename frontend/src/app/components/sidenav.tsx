import { Box, Drawer, Toolbar } from '@mui/material'

export default function SideNav() {
    return (
        <Drawer
            variant='permanent'
            sx={{
                width: 150,
                flexShrink: 0,
                ['& .MuiDrawer-paper']: {
                    width: 150,
                    boxSizing: 'border-box',
                },
            }}
        >
            <Toolbar />

            <Box>
                <h1>SideNav</h1>
            </Box>
        </Drawer>
    )
}
