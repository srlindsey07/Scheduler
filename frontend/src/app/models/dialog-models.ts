import { ReactElement } from 'react'

export interface DialogProps {
    open: boolean
    onClose: () => void
    children: ReactElement | ReactElement[]
}
