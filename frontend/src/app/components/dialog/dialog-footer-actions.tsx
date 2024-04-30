import { memo, ReactElement } from 'react'

function DialogFooterActions({
    children,
}: {
    children: ReactElement | ReactElement[]
}) {
    return <div className='flex justify-end'>{children}</div>
}
export default memo(DialogFooterActions)
