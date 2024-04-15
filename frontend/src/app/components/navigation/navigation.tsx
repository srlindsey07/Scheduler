'use client'
import { Children, cloneElement, ReactElement, useState } from 'react'

export default function Navigation({
    children,
    onAction,
    className,
    defaultActive,
}: {
    children: ReactElement | ReactElement[]
    onAction: (e: string) => void
    className?: string
    defaultActive?: string
}) {
    const [selected, setSelected] = useState<string>(
        defaultActive ? defaultActive : '',
    )

    function clickHandler(value: string) {
        setSelected(value)
        onAction(value)
    }

    return (
        <div className='flex flex-col'>
            {Children.map(children, (child) => {
                return cloneElement(child, {
                    onClick: (e: string) => clickHandler(e),
                    isActive: child.props.value === selected,
                })
            })}
        </div>
    )
}
