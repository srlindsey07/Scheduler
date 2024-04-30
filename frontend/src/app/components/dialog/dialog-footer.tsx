import React, { ReactElement } from 'react'

function DialogFooter({
    children,
}: {
    children?: ReactElement | ReactElement[]
}) {
    return <div className='border-t border-slate-300 mt pt'>{children}</div>
}

export default React.memo(DialogFooter)
