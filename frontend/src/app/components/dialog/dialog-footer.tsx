import { ReactElement } from 'react'

export default function DialogFooter({
    children,
}: {
    children?: ReactElement | ReactElement[]
}) {
    return <div className='border-t border-slate-300 mt pt'>{children}</div>
}
