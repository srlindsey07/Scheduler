import { ReactElement } from 'react'

export default function DialogFooterActions({
    children,
}: {
    children: ReactElement | ReactElement[]
}) {
    return <div className='flex justify-end'>{children}</div>
}
